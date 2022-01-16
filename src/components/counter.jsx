import React, { useEffect, useState } from 'react'
import styles from './counter.module.css'

const Counter = () => {

    let countDownDate = new Date("Jan 16, 2022 23:00:00").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const [myTime, setMyTime] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000)
        return () => clearInterval(timerID)
    })

    function tick() {
        setMyTime(new Date())
    }
    

    return (
        <p className={styles.counter}>
            {
          days + "d " + hours + "h "
          + minutes + "m " + seconds + "s "
        }
        </p>
    )

}

export default Counter