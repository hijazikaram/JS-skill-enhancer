import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: '',
      disableAction: true,
      result: null,
      actions: ['-', '+', '*', '/', '=']
    };
  }

  handleNumClicked = (num) => {
    let calc = this.state.calc.concat(num);
    if (calc.length > 1 && calc.charAt(0) === '0') {
      calc = calc.substr(1)
    };
    this.setState({
      calc,
      disableAction: false,
      result: null
    });
  }

  handleActionClicked = action => {
    if (action === '=') {
      this.setState({
        result: eval(this.state.calc),
        disableAction: true,
        calc: ''
      });
    } else {
      this.setState({
        calc: this.state.calc.concat('', action),
        disableAction: true,
        result: null
      });
    };
  }

  clearState = () => {
    this.setState({
      calc: '',
      disableAction: true,
      result: null
    });
  }
  render() {
    console.log(this.state);
    const { actions } = this.state;
    // str 12 [+,-,/,*] 01
    // example `12 + 01` should be `12 + 1` 
    // if 0 is is the first then user clicks another num, remove the 0
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const num = numbers.map((num, i) => <button key={i} onClick={() => this.handleNumClicked(num)}>{ num } </button>);
    const action = actions.map((action,i) => <button key={i} disabled={this.state.disableAction} onClick={() => this.handleActionClicked(action)}>{action}</button>);

    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="calc">
          <div>
            <input type="text" value={this.state.result ? this.state.result : this.state.calc} readOnly></input>
          </div>
          <div>
            { num }
          </div>
          <div>
            { action }
            <button onClick={this.clearState}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
