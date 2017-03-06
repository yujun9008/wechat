import { takeEvery, isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import {getJSON} from '../common/dataService';
import Constants from '../constants/legion';
import URLS from '../constants/URLS';
import { SHOW_GLOBAL_LOADING, HIDE_GLOBAL_LOADING } from '../constants/globalLoading';

//获取事业部维度报表
function* getLegionReport (action) {
    yield put({type: SHOW_GLOBAL_LOADING});
    try {
        const data = yield call(getJSON, URLS.LEGION_REPORT,{...action.queryParams});
        yield put({type: Constants.LEGION_REPORT_SUCCEEDED,data:data});
        yield put({type: HIDE_GLOBAL_LOADING});
    } catch(e) {
        yield put({type: Constants.LEGION_REPORT_FAILED, message: e});
        yield put({type: HIDE_GLOBAL_LOADING});
    }
}
function* getLegionReportSaga() {
  yield* takeEvery(Constants.LEGION_REPORT_REQUESTED, getLegionReport);
}

export {
    getLegionReportSaga,
};
