
import React, { Component, PropTypes } from 'react';
import { hashHistory, History, Link } from 'react-router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {GROUP_REPORT_REQUESTED} from '../../constants/group';
import global from '../../common/global';
import util from '../../common/util';
import GroupMonth from '../../components/group/groupMonth/GroupMonth';
import GroupWeek from '../../components/group/GroupWeek/GroupWeek';
import Header from '../../components/common/header/Header';
class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
    this.changeHeader = this.changeHeader.bind(this);
    this.query = this.query.bind(this);
  }

  componentDidMount(){
    const { pathname } = this.props.location;
    if(pathname.startsWith('/group/week')){
      this.setState({ selectedIndex: 1 },function () {
          this.query(2)
      });
    }else{
      this.setState({ selectedIndex: 0 },function () {
        this.query(1)
      });
    }
  }

  changeHeader(index) {
    if (index === 1) {
      //月累计
      this.setState({ selectedIndex: 0 });
      hashHistory.push('/group/month');
    }else if(index === 2){
      //周累计
      this.setState({ selectedIndex:1 });
      hashHistory.push('/group/week');
    }
    this.query(index);
  }

  query(dateType) {
    const code = util.getURLParams().code || '';
    const state = util.getURLParams().state || '';
    const  nowDate = global.nowDate();
    const { dispatch } = this.props;
    const queryParams = {dateType,nowDate, code, state};
    dispatch({type:GROUP_REPORT_REQUESTED,queryParams})
  }

  render() {
    return (
      <div>
        <Header onTimeChange={this.changeHeader} selectedIndex={this.state.selectedIndex} />
        {this.props.children ? React.cloneElement(this.props.children, this.props) : <GroupMonth {...this.props}/>}
      </div>
    )
  }
}

const getGroup = (state) => {
  return state.group;
}
const selectors = createSelector(
  [getGroup],
  (group) => {
    return {...group};
  }
)

export default connect(selectors)(Group);
