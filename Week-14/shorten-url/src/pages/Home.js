import './Home.css';
import { React, useState } from "react";
function Home() {
  const [userInput,setUserInput] = useState('');
  const [urlList,setUrlList] = useState([]);  
  function addUrl(){
    fetch(`https://api.shrtco.de/v2/shorten?url=${userInput}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const newUrl= urlList.concat({"value":data.result.full_short_link,"key":data.result.full_short_link});
   setUrlList(newUrl);
   setUserInput('');
      }).catch((error)=>  console.log(error))  
    
  }
  return (
    <div className="App">
      <h1>  Url Shortner</h1>
      <div className='urlDiv'></div>
    <input type="text" className='urlInput' value={userInput} onChange= {(e)=>{setUserInput(e.target.value)}} placeholder ="Enter the link to be shortened" />
    <button className='submitBtn' onClick={()=>addUrl()}>Submit URL</button>
    <div className='listDiv'>
      {urlList.map((url)=>{
        return <div>{url.value}</div>
      })}
    </div> 
    </div>
  );
}

export default Home;
