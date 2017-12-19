import React from 'react';
// import {connect} from 'react-redux';
// import {Provider} from 'react-redux';
import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav />
      <h1>HOT or COLD</h1>
    </header>
  );
}
