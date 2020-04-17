import React, { useState, useEffect } from 'react'
import { fetchDailyData } from "../../api"
const Charts = () => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
            fetchAPI()
        
    })

    return (
        <div>
            <h1>Chart</h1>
        </div>
    )
} 

export default Charts