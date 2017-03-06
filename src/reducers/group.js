import React from 'react';
import { handleActions } from 'redux-actions';
import {GROUP_REPORT_SUCCEEDED, GROUP_REPORT_FAILED} from '../constants/group';



export default handleActions({
        [GROUP_REPORT_SUCCEEDED](state, action) {
            return {...state, groupData: action.data[0]}
        },
        [GROUP_REPORT_FAILED](state, action) {
            alert(action.message);
            return state;
        },

    },
    {
      groupData:{}
    }
)
