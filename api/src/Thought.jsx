import React, { useState,useEffect } from 'react'
import "./Thoughts.css"

const Thought = () => {
   const [data,setdata] = useState([])



    
        // Fetch data from an API (you can replace the URL with your actual API)
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.adviceslip.com/advice'); 
            // Replace with actual API URL
            const result = await response.json();
            setdata(result.slip); // Step 3: Save the fetched data to state
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
    ;
    

 
   


  return (
    <div className='though'>
        <h1>{data.advice}</h1>
        <button onClick={fetchData} >Give me Advice</button>
    </div>
  )
}

export default Thought