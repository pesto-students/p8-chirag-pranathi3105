function createIncrement()
{
    let count = 0;
    function increment()
    {
        console.log('count value inside increment Method:', count);
        count ++;
    }
    console.log('count value outside increment Method:', count);
    let message = 'Count is '+count;
    function log()
    {
        console.log('Message value inside log Method:', message);
        console.log(message);
    }
    console.log('Message value outside log Method:', message);
    return[increment,log]
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();