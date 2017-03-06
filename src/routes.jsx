import React from 'react';
import ReactDom from 'react-dom';

import {getJSON} from './common/dataService';
import global from './common/global';
import util from './common/util';
import URLS from './constants/URLS';

//main
import Main from './containers/Main';
import Group from './containers/group/Group';
import GroupMonth from './components/group/groupMonth/GroupMonth';
import GroupWeek from './components/group/groupWeek/GroupWeek';
import Department from './containers/department/Department';
import Legion from './containers/legion/Legion';


const routes = [{
  path: '/',
  component: Main,
  indexRoute: {component: Group},
  childRoutes: [
    {
      path: 'group',
      component: Group,
      childRoutes:[
        {
          path: 'month',
          component: GroupMonth
        },
        {
          path: 'week',
          component: GroupWeek
        }
      ]
    },
    {
      path: 'department',
      component: Department
    },
    {
      path: 'legion',
      component: Legion
    }
  ]
},
    //{
      //path: 'login',
      //component: Login
    //}
];

export default routes;
