//import React, { Component } from 'react';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';

//import './custom.css'

//export default class App extends Component {
//  static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//        <Route exact path='/' component={Home} />
//        <Route path='/counter' component={Counter} />
//        <Route path='/fetch-data' component={FetchData} />
//      </Layout>
//    );
//  }
//}

import React, { Component } from 'react';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Content from './components/main/Content';

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;

