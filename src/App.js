import React, { Component } from "react";
import './style.css'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            numero: 0,
            btn: 'Go!'
        }
        this.timer = null
        this.go = this.go.bind(this)
        this.clean = this.clean.bind(this)
    }
    go() {
        if(this.timer !== null) {
            clearInterval(this.timer)
            let state = this.state
            state = {btn: 'Go!'}
            this.setState(state)
            return this.timer = null
        }
        this.timer = setInterval( () => {
            let state = this.state
            state.numero += 0.1
            state = {btn: 'Pause'}
            this.setState(state)
        },100)
        
        
    }

    clean() {
        if(this.timer !== null) {
            clearInterval(this.timer)
            this.timer = null
        }
        let state = this.state
        state.btn = 'Go!'
        state.numero = 0
        this.setState(state)
    }
    render() {
        return(
            <div className="container">
                <img className="img" src={require('./assets/cronometro.png')}/>
                    <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="btn" onClick={this.go}>{this.state.btn}</a>
                    <a className="btn" onClick={this.clean}>Clean</a>
                </div>
            </div>
        )
    }
}

export default App