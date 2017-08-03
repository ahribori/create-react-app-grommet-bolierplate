import React, { Component } from 'react';
import 'grommet/scss/vanilla/index.scss';
import './style/App.scss';
import {
    BrowserRouter,
} from 'react-router-dom';
import Layout from './pages/layout/Layout';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
