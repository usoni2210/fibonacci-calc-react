import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import FibCalc from './FibCalc';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                        <Link to="/">Home</Link>
                        <Link to="/otherpage">Other Page</Link>
                        <br/><br/>
                        <div>
                            <Route exact path="/" component={FibCalc}/>
                            <Route path="/otherpage" component={OtherPage}/>
                        </div>
                    </header>
                </div>
            </Router>
        );
    }
}

export default App;
