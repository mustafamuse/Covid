import React, { useState, useEffect } from 'react'
import { fetchDailyData } from "../../api/covidApi"
import { Line, Bar } from "react-chartjs-2"
import styles from "./Charts.module.css"


const Charts = ({ data, country }) => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    })

    const lineChart = (
        dailyData[0] ?
            (
                <Line
                    data={{
                        // deconstruct the date, map and return an array
                        labels: dailyData.map(({ date }) => date),
                        // api doesn't have daily recovered data, it just has the daily infected and daily deaths only
                        datasets: [{ data: dailyData.map(({ confirmed }) => confirmed), label: "Infected", borderColor: "#3333ff", fill: true },
                        { data: dailyData.map(({ deaths }) => deaths), label: "Deaths", borderColor: "red", fill: true, backgroundColor: "red" }],
                    }}
                />)

            : null
    )

    const barChart = (
        data.confirmed ?
            (
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                            labels: "People",
                            backgroundColor: ["blue", "green", "red"],
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: {
                            display: true,
                            text: `Current situation in ${country}`
                        }
                    }} />
            )
            : null
    )

    return (
        <div className={styles.container}>
            <h1>Chart</h1>
            {/* depending on if i selected a country, a chart will render */}
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts