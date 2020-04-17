import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core"
import styles from "./Countries.module.css"
import { fetchCountries } from '../../api';


const Countries = ({props}) =>  {
//                ^^ the props i sent down
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
       
        const fetchApi = async () => {
         setFetchedCountries( await fetchCountries())
        }

        fetchApi();
    },[setFetchedCountries]); //this will update the state

    console.log(fetchedCountries)

    return (
        <div>
            <h1>Countries </h1>
            <FormControl style={styles.FormControl}>
                <NativeSelect defaultValue="" onChange={(e) => {props.handleCountryChange(e.target.value)}}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, index) => <option value={country} key={index}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countries