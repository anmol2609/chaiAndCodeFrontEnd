import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios'
function App(){
    const [jokes,setJokes] = useState([])
    useEffect(()=>{
        axios.get('/api/jokes')
        .then((response)=>{
            
            setJokes(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            jokes
            {
                jokes.map((item,index)=>{
                    return (
                        <div key={index}>{item.joke}</div>     
                    )
                })
            }
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);