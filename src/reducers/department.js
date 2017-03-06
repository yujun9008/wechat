import React from 'react';
import { handleActions } from 'redux-actions';
import Constants from '../constants/department';



export default handleActions({
        [Constants.BUSINESS_DEPART_REPORT_SUCCEEDED](state, action) {
            return {...state, departmentData: action.data}
        },
        [Constants.BUSINESS_DEPART_REPORT_FAILED](state, action) {
            alert(action.message);
            return state;
        },

    },
    {
      departmentData:{
        businessDepartList:[],
        businessDepartSum:{}
      }
    }
)
