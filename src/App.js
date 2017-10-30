import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      menuExpanded: false
    };
  }

  handleOnClick = () => {
    if(!this.state.menuExpanded){
      this.setState({
        menuExpanded: true
      })
    } else {
      this.setState({
        menuExpanded: false
      })
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Grid>
            <Row>
              <div className="nav-header">
                <a className="nav-brand">EricDeng</a>
                <button className="nav-toggle" onClick={this.handleOnClick}>
                  <span className={this.state.menuExpanded? "icon-bar bar-1" : "icon-bar"}></span>
                  <span className={this.state.menuExpanded? "icon-bar bar-2" : "icon-bar"}></span>
                </button>
              </div>
              <div className={this.state.menuExpanded? "nav-collapse in": "nav-collapse"}>
                <ul className="nav-list">
                  <li className="nav-item"><a href="/" onClick={this.handleOnClick}>about</a></li>
                  <li className="nav-item"><a href="/" onClick={this.handleOnClick}>work</a></li>
                  <li className="nav-item"><a href="/" onClick={this.handleOnClick}>project</a></li>
                </ul>
              </div>
            </Row>
          </Grid>
        </nav>
        <div className={this.state.menuExpanded? "menu-curtain menu-curtain-expanded" : "menu-curtain"} onClick={this.handleOnClick}></div>
      </div>
    );
  }
}

export default App;
