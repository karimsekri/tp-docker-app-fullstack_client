import { useEffect, useState } from "react";

const Time   = () => {
    const [time, setTime] = useState("")

    useEffect(() => {
        const getHeureApi = async () => {
            const reponse = await fetch(`http://localhost:1992/server/time`);
            const timeText = await reponse.text();
            setTime(timeText);
            
          
        }
        getHeureApi()
    }, [])
    
    return (
        <div>
            <h1>Time</h1>
            <label htmlFor="time">{time}</label>
        </div>
    )
}
export default Time