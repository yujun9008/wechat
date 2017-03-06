
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TabBar } from 'antd-mobile';

import { hashHistory, History } from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pathname } = this.props.location;
    let selectedTab = 'groupTab';
    if(pathname.startsWith('/group')) {
      selectedTab = 'groupTab'
    } else if(pathname.startsWith('/department')) {
      selectedTab = 'departmentTab'
    }else if(pathname.startsWith('/legion')) {
      selectedTab = 'legionTab'
    }
    return (
      <div style={{position: 'relative', zIndex: 100}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
          icon={require('../../images/icon-meetroom@3x.png')}
          selectedIcon={require('../../images/icon-meetroom-sel@3x.png')}
            title="集团"
            key="集团"
            selected={selectedTab === 'groupTab'}
            onPress={() => {
              hashHistory.push('group');
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
          icon={require('../../images/icon-meetroom@3x.png')}
          selectedIcon={require('../../images/icon-meetroom-sel@3x.png')}
            title="事业部"
            key="事业部"
            selected={selectedTab === 'departmentTab'}
            onPress={() => {
              hashHistory.push('department');
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
          icon={require('../../images/icon-meetroom@3x.png')}
          selectedIcon={require('../../images/icon-meetroom-sel@3x.png')}
            title="军团"
            key="剧团"
            selected={selectedTab === 'legionTab'}
            onPress={() => {
              hashHistory.push('legion');
            }}
            data-seed="logId2"
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer;
