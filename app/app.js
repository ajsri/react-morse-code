import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      morseText: ""
    }
    this.morseCode = {
      "A": ".-",
      "B": "-...",
      "C": "-.-.",
      "D": "-..",
      "E": ".",
      "F": "..-.",
      "G": "--.",
      "H": "....",
      "I": "..",
      "J": ".---",
      "K": "-.-",
      "L": ".-..",
      "M": "--",
      "N": "-.",
      "O": "---",
      "P": ".--.",
      "Q": "--.-",
      "R": ".-.",
      "S": "...",
      "T": "-",
      "U": "..-",
      "V": "...-", 
      "W": ".--",
      "X": "-..-",
      "Y": "-.--",
      "Z": "--..",
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----."
    }
  }
  convertToMorse(text){
    this.setState({original: text})
    let output = ""
    let morseArray = text.split("")
    for(let i = 0; i < morseArray.length; i++){
      if(morseArray[i].toUpperCase() == " "){
        output += " "
      }
      else {
        output += this.morseCode[morseArray[i].toUpperCase()]
      }
    }
    this.setState({morseText: output})
  }
  render(){
    return(
      <div className="container">
        <input className="form-control"
               onChange={(e)=>this.convertToMorse(e.target.value)}/>
        <h3>original: {this.state.original}</h3>
        <h3>morse: {this.state.morseText}</h3>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))