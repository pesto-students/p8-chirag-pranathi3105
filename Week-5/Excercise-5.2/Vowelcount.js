//write a vowel count function which accepts string
//returns keys and values
const vowels = ["a", "e", "i", "o", "u"]

function vowelCount(str)
{
    console.log(str);
    const vowelMap = new Map()
    for(let letter of str.toLocaleLowerCase())
    {
       
        if(vowels.includes(letter)){
            if(vowelMap.has(letter)){
                console.log(letter);
                vowelMap.set(letter,vowelMap.get(letter)+1)
            }
            else
            {
                console.log(letter);
                vowelMap.set(letter,str.indexOf(letter));
            }
        }
    }
    return vowelMap;
}

const vowelcheck = vowelCount("subhashini");
console.log(vowelcheck);