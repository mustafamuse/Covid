import React from 'react';
import { fetchData } from "./api/covidApi"
import Cards from './components/cards/Cards'
import Charts from './components/charts/Charts';
import Countries from './components/countries/Countries';
import styles from "./App.module.css"


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      country: '',
    }
  }

  
  // i put the async in front of the componentDidMount, to make it asynchronous 
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({data: fetchedData})
  }


  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    console.log(country)
    this.setState({data: fetchedData, country: country})
  }


  render() {
    const { data,country} = this.state;
    return (
      <div className={styles.container}>
        <h1>CoronaVirus Live Tracker</h1> 
        <h2>Latest on Covid-19</h2>
        <img src="coronavirus.png" width="500"  alt ="Covid-19"/>
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    )
  }
}

export default App;
