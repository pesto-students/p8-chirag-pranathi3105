// source : https://medium.com/nerd-for-tech/implement-your-own-promises-in-javascript-68ddaa6a5409
const STATE = {
    PENDING: "PENDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
  }
  class MyPromise {
    constructor(callback) {
      // Initial state of Promise is empty
      this.state = STATE.PENDING;
      this.value = undefined;
      this.handlers = [];
      this.timeout = 0;
      // Invoke callback by passing the _resolve and the _reject function of our class
      try {
        callback(this._resolve, this._reject);
      } catch (err) {
        this._reject(err);
      }
    }
    _resolve = (value) => {
      this.updateResult(value, STATE.FULFILLED);
    };
  
    _reject = (error) => {
      this.updateResult(error, STATE.REJECTED);
    };
  
    then(onSuccess, onFail) {
      return new MyPromise((res, rej) => {
        this.addHandlers({
          onSuccess: function (value) {
            // if no onSuccess provided, resolve the value for the next promise chain
            if (!onSuccess) {
              return res(value);
            }
            try {
              return res(onSuccess(value));
            } catch (err) {
              return rej(err);
            }
          },
          onFail: function (value) {
            // if no onFail provided, reject the value for the next promise chain
            if (!onFail) {
              return rej(value);
            }
            try {
              return res(onFail(value));
            } catch (err) {
              return rej(err);
            }
          },
        });
      });
    }
    /*
      Since then method take the second function as onFail, 
      we can leverage it while implementing catch
      */
    catch(onFail) {
      return this.then(null, onFail);
    }
  
    // Finally block returns a promise which fails or succeedes with the previous promise resove value
    finally(callback) {
      return new MyPromise((res, rej) => {
         let val;
         let wasRejected;
         this.then((value) => {
           wasRejected = false;
           val = value;
           return callback();
         }, (err) => {
           wasRejected = true;
           val = err;
           return callback();
         }).then(() => {
           // If the callback didn't have any error we resolve/reject the promise based on promise state
           if(!wasRejected) {
             return res(val);
           } 
           return rej(val);
         })
      })
    }
  
    addHandlers(handlers) {
      this.handlers.push(handlers);
      this.executeHandlers();
    }
  
    executeHandlers() {
      // Don't execute handlers if promise is not yet fulfilled or rejected
      if (this.state === STATE.PENDING) {
        return null;
      }
  
      // We have multiple handlers because add them for .finally block too
      this.handlers.forEach((handler) => {
        if (this.state === STATE.FULFILLED) {
          return handler.onSuccess(this.value);
        }
        return handler.onFail(this.value);
      });
      // After processing all handlers, we reset it to empty.
      this.handlers = [];
    }
  
    updateResult(value, state) {
      // This is to make the processing async
      setTimeout(() => {
        /*
          Process the promise if it is still in pending state. 
          An already rejected or resolved promise is not processed
        */
        if (this.state !== STATE.PENDING) {
          return;
        }
  
        // check is value is also a promise
        if (this.isThenable(value)) {
          return value.then(this._resolve, this._reject);
        }
  
        this.value = value;
        this.state = state;
  
        // execute handlers if already attached
        this.executeHandlers();
      }, this.timeout);
    }
    isThenable(value) {
      if (
        typeof value === "object" &&
        value !== null &&
        value.then &&
        typeof value.then === "function"
      ) {
        return true;
      }
      return false;
    }
  }
  
  const getNumber = new MyPromise((resolve,reject) => {
      const randomNum = (Math.round(Math.random()*101));
      console.log(randomNum);
        if (randomNum % 5 === 0) {
            console.log("Divsible")
          return resolve("Divisble by 5");
        } else {
          return reject("Not divisble by 5");
        }
  })
  
  getNumber.then((res) => {
      console.log(res)
  }).catch((err) => {
      console.log(err)
  })