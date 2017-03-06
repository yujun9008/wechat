import React from 'react';
import { handleActions } from 'redux-actions';
import Constants from '../constants/legion';



export default handleActions({
        [Constants.LEGION_REPORT_SUCCEEDED](state, action) {
            return {...state, legionData: action.data}
        },
        [Constants.LEGION_REPORT_FAILED](state, action) {
            alert(action.message);
            return state;
        },

    },
    {
      legionData:{
        legionReportList:[],
        legionReportSum:{}
      }
    }
)
