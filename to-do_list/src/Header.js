import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'moment';

class Header extends Component {
    render() {
        let idn = require('moment/locale/id');
        Moment.updateLocale('id', idn);
        return (
            <div>
                <h3>TodoList</h3>
                <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
            </div>
        )
    }
}

export default Header;