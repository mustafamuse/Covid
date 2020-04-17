import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core"
import styles from "./Countries.module.css"


const Countries = () =>  {
    return (
        <div>
            <h1>Countries </h1>
            <FormControl style={styles.FormControl}>
                <NativeSelect>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countries