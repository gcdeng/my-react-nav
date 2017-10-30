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

  componentDidMount(){
    window.onscroll = () => {
      if(this.state.menuExpanded){
        this.setState({
          menuExpanded: false
        })
      }
    }
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
        <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    );
  }
}

export default App;
