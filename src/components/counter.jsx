import React, { useEffect, useState } from 'react'
import styles from './counter.module.css'

const Counter = () => {

    const [myDate, setMyDate] = useState(new Date("Jan 16, 2022 23:00:00"))

    let now = new Date().getTime();
    let distance = myDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const [myTime, setMyTime] = useState(new Date());
    
    if (distance < 0) {
        let date = myDate.setDate(myDate.getDate() + 7)
        setMyDate(new Date(date))
    }

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000)
        return () => clearInterval(timerID)
    })

    function tick() {
        setMyTime(new Date())
    }

    return (
        <div>

        <p className={styles.counter}>
            
            {
                days + "d " + hours + "h "
                + minutes + "m " + seconds + "s "
            }
        </p>
        <h5 style={{fontSize: 30, fontFamily: "'Helvetica Ultra Light'", color: "grey"}}>Horário atual: {
                `${myTime.toLocaleTimeString()}, ${myTime.toLocaleDateString()}`
            }</h5>
        </div>
    )

}

export default Counter