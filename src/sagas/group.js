import { takeEvery, isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import {getJSON} from '../common/dataService';
import {GROUP_REPORT_REQUESTED, GROUP_REPORT_SUCCEEDED, GROUP_REPORT_FAILED} from '../constants/group';
import { SHOW_GLOBAL_LOADING, HIDE_GLOBAL_LOADING } from '../constants/globalLoading';
import URLS from '../constants/URLS';

//获取事业部维度报表
function* getGroupReport(action) {
    yield put({type: SHOW_GLOBAL_LOADING});
    try {
        const data = yield call(getJSON, URLS.GROUP_DEPART_REPORT,{...action.queryParams});
        yield put({type: GROUP_REPORT_SUCCEEDED,data:data});
        yield put({type: HIDE_GLOBAL_LOADING});
    } catch(e) {
        yield put({type: GROUP_REPORT_FAILED, message: e});
        yield put({type: HIDE_GLOBAL_LOADING});
    }
}
function* getGroupReportSaga() {
  yield* takeEvery(GROUP_REPORT_REQUESTED, getGroupReport);
}

export {
    getGroupReportSaga
};
