import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    };
  
    componentDidMount(){
      this.timerID = setInterval( //Essa função faz o relógio avançar 1 segundo, assim o app renderiza a cada 1s, atualizando.
        () => this.tick(),        // Caso aumentarmos esse intervalo, podemos atualizar o app a cada 1 hora, dia, semana, mês, ano...
        1000                      // Neste exemplo definimos o intervalo como 1000 milisegundos = 1 segundo.
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    tick(){
      this.setState({
        date: new Date()
      });
    }
  
    render(){
      return(
        <div>
          <h2>Convoque seu buda, o clima tá tenso</h2>
      <h5>Agora são {this.state.date.toLocaleTimeString()}.</h5>
        </div>
      );
    }
  }

export default Clock;