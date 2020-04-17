import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeUrl = url;

    if(country) {
        changeUrl = `${url}/countries/${country}`
    }
    try {
        // i deconstructed the data api obj to get only the keys i wanted and then assigned those to the modified data object that i created
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeUrl);

        const modifiedData = {confirmed, recovered , deaths, lastUpdate}
        // console.log("fetched APIDATA :", modifiedData)
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () =>{
    try {

        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        // console.log('fetch Daily Data: ', modifiedData)
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {

        const {data: {countries}} = await axios.get(`${url}/countries`)

        const modifiedData = countries.map((country) => country.name)
        // console.log("fetched Countries :", modifiedData)
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}