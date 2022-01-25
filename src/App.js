import './App.css';
import axios from "axios"
import React from 'react';
import Homepage from './components/homepage/Homepage';
import Header from './components/header/Header';
import Search from './components/search/Search';
import { Switch, Link, Route, Routes } from "react-router-dom"
import SomeUser from './components/someUser/SomeUser';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      repo: []
    }
  }

  fetchData = () => {

    const headers = {
      'Authorization': `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`

    };
    axios.get("https://api.github.com/users/stefanstefanovic94", { headers })
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data

        })
      }
      );
  }

  fetchRepo = () => {
    const headers = {
      'Authorization': `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`

    };

    axios.get("https://api.github.com/users/StefanStefanovic94/repos")
      .then(response => {
        console.log(response);
        this.setState({
          repo: response.data

        })
      }
      );
  }


  componentDidMount() {
    this.fetchData()
    this.fetchRepo()
  }



  render() {
    return (<div>
      {console.log(this.state.repo)}
      <Header />


      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        {/* <Route exact path="/" component={<Homepage imgUrl={this.state.data.avatar_url} name={this.state.data.name} bio={this.state.data.bio} repo={this.state.repo} key={this.state.data.id} />} /> */}
        <Route exact path="/user/:id" component={SomeUser}></Route>
      </Switch>
    </div>)
  }
}
export default App 
