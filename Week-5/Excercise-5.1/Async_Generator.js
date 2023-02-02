async function callAsync(item) {
  const response1 =  collectItems(item);
    const response2 =  prepareFood(response1);

      const response3 =  ServeHot(response2);

    return response3
  
};
function* Generator(item)
{
 let response1 = yield collectItems(item)
 let response2 =  yield prepareFood(response1)
  let response3 = yield prepareFood(item)
}
function collectItems(items)
{
  return items
}
function prepareFood(items)
{
  return items + " collected and Prepared the order "
}
function ServeHot(food)
{
  return food +"Served Hot"
}

callAsync("Tea").then(function(result) {
  console.log(result)
},function(error){
  console.log(error);
});
console.log("**********Generator example***********")
for(let item of Generator("Cofee"))
{
console.log(item)
}
console.log("**********Async/Await example***********")