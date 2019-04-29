import React from 'react';
import './App.css';
import SetTimer from './SetTimer'
import DisplayTime from './DisplayTime'
import StartStop from './StartStop'
import Reset from './Reset'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputTime: '',
      runningTime: 0,
      status: false
    }
  }

  render() {
    return (
      <div className="App">
        <SetTimer 
          timeValue={this.state.inputTime}
          handleChange={this._setInputNum}
          />

        <DisplayTime 
          time={this.state.runningTime}
          timer={this.timer}
          />

        <StartStop time={this.state.inputTime}
          handleClick={this._handleClick}
          status={this.state.status}/>

        <Reset 
          onClick={this._handleReset}
          />
        
      </div>
    );
  }
  _setInputNum = (inputTime) => {
    this.setState({
      inputTime,
      runningTime: inputTime
    })
  }


  _handleClick = () => {
    this.setState( state => {
        if (state.status) {
            clearInterval(this.timer);
        } else {
            
            let interval = 1;
            this.timer = setInterval (() => {
                this.setState({
                    runningTime: this.state.runningTime - interval, 
                    status: true })
            }, 1000)
        }
        return { status: !state.status };
    })
}

_handleReset = () => {
  this.setState({
      status: false,
      runningTime: 0,
      inputTime: ''
  })
}

}


export default App;
