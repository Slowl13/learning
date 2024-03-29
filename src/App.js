import { useEffect, useState } from "react"

export default function App(){
    useEffect(() => {
        localStorage.getItem("arr") ?? localStorage.setItem("arr", JSON.stringify([]));
    },[])

    
    function setLocal(){
        try{
            var tempArr = [...JSON.parse(localStorage.getItem("arr"))]
        }
        catch(e){
            tempArr = [];
        }
        
        tempArr.push(val)
        localStorage.setItem("arr", JSON.stringify(tempArr));
        setList(tempArr);
    }

    function clearHistory(){
        localStorage.setItem("arr", JSON.stringify([]))
        setList(JSON.parse(localStorage.getItem("arr")))
    }

    const handlePress = e => {
        if(e.key === 'Enter') { 
         setLocal();
        }
    }

    function filterHistory(){
        console.log(list.sort((a,b) => a.length > b.length ? 1 : -1))
        setList(list.filter(elem => true));
    }

    const [val, setVal] = useState("Begin")
    const [list, setList] = useState(JSON.parse(localStorage.getItem("arr")))

    return (
        <>
            <input value={val} onChange={(e) => setVal(prev => e.target.value)} onKeyDown={handlePress}></input>
            <button onClick={() => setLocal()}>Test</button>
            <p>{val}</p>
            <h1>History</h1>
            <button onClick={() => clearHistory()}>Clear History</button>
            <button onClick={() => filterHistory()}>Filter by lenght</button>
            <ul>
            {
                list.map(elem => <li>{elem}</li>)
            }
            </ul>
        </>
    )
}