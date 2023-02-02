async function callAsync(item) {
  const response1 =  collectItems(item);
    const response2 =  prepareFood(response1);

      const response3 =  ServeHot(response2);

    return response3
  
};
function* Generator(item)
{
  yield collectItems(item)
  yield prepareFood()
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