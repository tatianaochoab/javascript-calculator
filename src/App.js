import React, { Component } from 'react';
import Calculator from './components/calculator'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principalDisplay: '',
      secondaryDisplay: ''
    }
  }
  escribirPunto = (text, tmpDisplaySecondary, tmpDisplayPrincipal) => {
    if (!tmpDisplayPrincipal.includes(text)) {
      if (tmpDisplayPrincipal === "" || tmpDisplayPrincipal === "0") {
        tmpDisplaySecondary = tmpDisplaySecondary + '0' + text;
        tmpDisplayPrincipal = '0' + text;
      } else if ('+' === tmpDisplayPrincipal ||
        '-' === tmpDisplayPrincipal ||
        '*' === tmpDisplayPrincipal ||
        '/' === tmpDisplayPrincipal) {
        tmpDisplaySecondary = tmpDisplaySecondary + '0' + text;
        tmpDisplayPrincipal = tmpDisplayPrincipal + '0' + text;
      } else {
        tmpDisplaySecondary = tmpDisplaySecondary + text;
        tmpDisplayPrincipal = tmpDisplayPrincipal + text;
      }
      this.setState({
        principalDisplay: tmpDisplayPrincipal,
        secondaryDisplay: tmpDisplaySecondary
      })
    }

  }

  escribirNumero = (text, tmpDisplaySecondary, tmpDisplayPrincipal) => {
    tmpDisplaySecondary = tmpDisplaySecondary + text;
    if (tmpDisplayPrincipal === '0' ||
      '+' === tmpDisplayPrincipal ||
      '-' === tmpDisplayPrincipal ||
      '*' === tmpDisplayPrincipal ||
      '/' === tmpDisplayPrincipal) {
      tmpDisplayPrincipal = text
    } else {
      tmpDisplayPrincipal = tmpDisplayPrincipal + text
    }
    this.setState({ principalDisplay: tmpDisplayPrincipal })
    this.setState({ secondaryDisplay: tmpDisplaySecondary })
  }

  escribirOperador = (text, tmpDisplaySecondary, tmpDisplayPrincipal) => {
    if (tmpDisplayPrincipal === '-' && text === '-') {
    } else if (tmpDisplayPrincipal === '-' && text !== '-') {
      tmpDisplayPrincipal = text;
      tmpDisplaySecondary = tmpDisplaySecondary.substr(0, tmpDisplaySecondary.length - 2) + text;
    } else if (
      ('+' === tmpDisplayPrincipal ||
        '*' === tmpDisplayPrincipal ||
        '/' === tmpDisplayPrincipal) && text !== '-'
    ) {
      tmpDisplaySecondary = tmpDisplaySecondary.substr(0, tmpDisplaySecondary.length - 1) + text
      tmpDisplayPrincipal = text
    } else {
      tmpDisplaySecondary = tmpDisplaySecondary + text
      tmpDisplayPrincipal = text
    }
    this.setState({ principalDisplay: tmpDisplayPrincipal })
    this.setState({ secondaryDisplay: tmpDisplaySecondary })
  }

  escribirIgual = (text, tmpDisplaySecondary, tmpDisplayPrincipal) => {
    let resultado = this.operacion(tmpDisplaySecondary)
    tmpDisplaySecondary = tmpDisplaySecondary + text + resultado
    tmpDisplayPrincipal = resultado
    this.setState({ principalDisplay: tmpDisplayPrincipal })
    this.setState({ secondaryDisplay: tmpDisplaySecondary })
  }


  handleClick = (e) => {
    let tmpDisplaySecondary = this.state.secondaryDisplay;
    let tmpDisplayPrincipal = this.state.principalDisplay;
    let text = e.target.innerText;
    if (tmpDisplaySecondary.includes('=')) {
      switch (text) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          tmpDisplaySecondary = '';
          tmpDisplayPrincipal = '';
          break;

        case '-':
        case '+':
        case '*':
        case '/':
          tmpDisplaySecondary = this.state.principalDisplay;
          tmpDisplayPrincipal = '';
          break;

        default:
          break;
      }
    }
    switch (text) {
      case 'AC':
        this.borrar();
        break;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        this.escribirNumero(text, tmpDisplaySecondary, tmpDisplayPrincipal);
        break;

      case '-':
      case '+':
      case '*':
      case '/':
        this.escribirOperador(text, tmpDisplaySecondary, tmpDisplayPrincipal);
        break;

      case '.':
        this.escribirPunto(text, tmpDisplaySecondary, tmpDisplayPrincipal);
        break;

      case '=':
        this.escribirIgual(text, tmpDisplaySecondary, tmpDisplayPrincipal);
        break;
      default:
        break;
    }
  }

  borrar = () => {
    this.setState({
      principalDisplay: '0',
      secondaryDisplay: ''
    });
  }

  operacion = (datos) => {
    /*eslint-disable no-eval */
    return eval(datos);
  }

  render() {
    return (
      <div className="container-fluid App">
        <Calculator
          handleClick={(e) => this.handleClick(e)}
          secondaryDisplay={this.state.secondaryDisplay}
          principalDisplay={this.state.principalDisplay}
        />
        <footer>by Tatiana Ochoa 2020</footer>
      </div>
    );
  }

}

export default App;
