import React from 'react';
import './App.css';
import { fetchData } from "./api/index"


class App extends React.Component {

    // i put the async in front of the componentDidMount, to make it asynchronous 
  async componentDidMount(){
    const data = await fetchData();
    console.log(data)
  }
  render() {
    return (
      <div>
        <h1>Hey</h1>
      </div>
    )
  }
}

export default App;
