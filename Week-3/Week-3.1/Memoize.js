function memoize(fn)
{
    const cache = new Map();
    return function(...args)
    {
        const key = args.toString()
        console.log("Keys"+key)
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
function add(a,b)
{
    return a+b;
}
const memoizeAdd = memoize(add);
time(()=>(memoizeAdd(100,100)));
time(()=>(memoizeAdd(100)));
time(()=>(memoizeAdd(100,200)));
time(()=>(memoizeAdd(100,100)));
time(()=>(memoizeAdd(200,100)));
time(()=>(memoizeAdd(100,200)));