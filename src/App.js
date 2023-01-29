import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=10
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        />
        <Navbar/>

        <Routes>
        <Route exaxt path="/" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="" pageSize={this.pageSize} country="us" category=""/>}/>
        <Route exaxt path="/business" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business"/>}/>
        <Route exaxt path="/entertainment" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}/>
        <Route exaxt path="/general" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
        <Route exaxt path="/health" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health"/>}/>
        <Route exaxt path="/science" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science"/>}/>
        <Route exaxt path="/sports" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="soprts" pageSize={this.pageSize} country="us" category="sports"/>}/>
        <Route exaxt path="/technology" element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key= "technology" pageSize={this.pageSize} country="us" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}


