import React from 'react';
import { fetchData } from "./api/index"
import Cards from './components/cards/Cards'
import Charts from './components/charts/Charts';
import styles from "./App.module.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},

    }
  }


  // i put the async in front of the componentDidMount, to make it asynchronous 
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({data: fetchedData})
  }
  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <h1>APP level</h1>
        <Cards data={data} />
        <Charts />
      </div>
    )
  }
}

export default App;
