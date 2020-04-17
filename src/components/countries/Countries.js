import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core"
import styles from "./Countries.module.css"
import { fetchCountries } from '../../api/covidApi';


const Countries = (props) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchApi();
    }, [setFetchedCountries]); //this will update the state

    // console.log(fetchedCountries)

    return (
        <div>
            <h1> Countries </h1>
            <FormControl style={styles.FormControl}>
                <NativeSelect defaultValue="" onChange={(e) => { props.handleCountryChange(e.target.value) }}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, index) => <option value={country} key={index}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countries