function memoize(fn)
{
    const cache = new Map();
    return function(...args)
    {
        const key = args.toString()
        console.log("fn called with "+key)
        console.log(cache)
        if(cache.has(key))
        {
            return cache.get(key)
        }
        cache.set(key,add(...args))
        return cache.get(key)

    }
}
function time(fn)
{
console.time()
fn();
console.timeEnd()
}
function add()
{
    let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum)
  return sum;
}
const memoizeAdd = memoize(add);
time(()=>(memoizeAdd(100,100)));
time(()=>(memoizeAdd(100)));
time(()=>(memoizeAdd(100,200)));
time(()=>(memoizeAdd(100,100)));
time(()=>(memoizeAdd(200,100)));
time(()=>(memoizeAdd(100,200,100)));