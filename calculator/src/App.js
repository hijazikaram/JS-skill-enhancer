import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: '0',
      disableAction: true,
      result: null,
      firstNum: '',
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
    const { firstNum, calc } = this.state;
    if (action === '=') {
      const finalNum = firstNum.concat(calc);
      this.setState({
        result: eval(finalNum),
        disableAction: true,
        firstNum: '',
        calc: ''
      });
    } else {
      const firstNum = firstNum === '' ? calc.concat(' ', action, ' ', firstNum) : this.state.firstNum.concat(' ', this.state.calc, ' ', action );
      this.setState({
        firstNum,
        calc: '0',
        disableAction: true,
        result: null
      });
    }
  }

  clearState = () => {
    this.setState({
      calc: '',
      disableAction: true,
      result: null,
      firstNum: ''
    });
  }
  render() {
    console.log(this.state);
    const { actions, result, calc, firstNum } = this.state;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const num = numbers.map((num, i) => <button key={i} onClick={() => this.handleNumClicked(num)}>{ num } </button>);
    const action = actions.map((action, i) => <button key={i} disabled={this.state.disableAction} onClick={() => this.handleActionClicked(action)}>{action}</button>);

    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="calc">
          <div>
            <input type="text" value={firstNum} readOnly></input>
          </div>
          <div>
            <input type="text" value={result ? result : calc} readOnly></input>
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
