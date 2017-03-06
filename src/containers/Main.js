
import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import GlobalLoading from './loading/globalLoading'

import Footer from './footer/footer';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  componentWillUnmount(){
  }

  render() {

    return (
      <div className='w_100 h_100'>
          {this.props.children}
          <Footer {...this.props} />
          <GlobalLoading {...this.props} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

const getState = (state) => {
  return state ;
};

const selectors = createSelector(
  [getState],
  (state) => {
    return  state ;
  }
)

export default connect(selectors)(AppComponent);
