import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
             language:"hi",
             search : ""
        }
    }
    changeLanguage = (data)=>{
         this.setState({language:data})
    }
    changeSearch = (data)=>{
        this.setState({search:data})
   }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar changeLanguage={this.changeLanguage }changeSearch={this.changeSearch} />
                    <Routes>
                        <Route path='' element={<Home language={this.state.language} q="All"/>} />
                        <Route path='/Politics' element={< Home search={this.state.search} language={this.state.language} q="Politics"/>} />
                        <Route path='/Education' element={< Home search={this.state.search} language={this.state.language} q="Education"/>} />
                        <Route path='/Crime' element={< Home search={this.state.search} language={this.state.language} q="Crime"/>} />
                        <Route path='/Technology' element={< Home search={this.state.search} language={this.state.language} q="Technology"/>} />
                        <Route path='/Games' element={< Home search={this.state.search} language={this.state.language} q="Games"/>} />
                        <Route path='/Fifa' element={< Home search={this.state.search} language={this.state.language} q="Fifa"/>} />
                        <Route path='/World' element={< Home search={this.state.search} language={this.state.language} q="World"/>} />
                        <Route path='/India' element={< Home search={this.state.search} language={this.state.language} q="India"/>} />
                        <Route path='/Covid' element={< Home search={this.state.search} language={this.state.language} q="Covid"/>} />
                        <Route path='/Jokes' element={< Home search={this.state.search} language={this.state.language} q="Jokes"/>} />
                        <Route path='/Science' element={< Home search={this.state.search} language={this.state.language} q="Science"/>} />
                        
                    </Routes>
                </BrowserRouter>
                <Footer />

            </>
        )
    }
}
