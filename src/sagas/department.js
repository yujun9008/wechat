import { takeEvery, isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import {getJSON} from '../common/dataService';
import Constants from '../constants/department';
import { SHOW_GLOBAL_LOADING, HIDE_GLOBAL_LOADING } from '../constants/globalLoading';
import URLS from '../constants/URLS';

//获取事业部维度报表
function* getBusinessDepartReport(action) {
    yield put({type: SHOW_GLOBAL_LOADING});
    try {
        const data = yield call(getJSON, URLS.BUSINESS_DEPART_REPORT,{...action.queryParams});
        yield put({type: Constants.BUSINESS_DEPART_REPORT_SUCCEEDED,data:data});
        yield put({type: HIDE_GLOBAL_LOADING});
    } catch(e) {
        yield put({type: Constants.BUSINESS_DEPART_REPORT_FAILED, message: e});
        yield put({type: HIDE_GLOBAL_LOADING});
    }
}
function* getBusinessDepartReportSaga() {
  yield* takeEvery(Constants.BUSINESS_DEPART_REPORT_REQUESTED, getBusinessDepartReport);
}

export {
    getBusinessDepartReportSaga,
};
