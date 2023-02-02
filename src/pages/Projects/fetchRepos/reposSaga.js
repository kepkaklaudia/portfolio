import { takeLatest, put, delay, call } from "redux-saga/effects";
import { fetchRepos, fetchReposSuccess, fetchError } from "./reposSlice";
import { getRepos } from "./getRepos";

function* fetchReposHandler() {
  try {
    yield delay(3000);
    const reposData = yield call(getRepos);
    yield put(fetchReposSuccess(reposData));
  } catch (error) {
    yield delay(1000);
    yield put(fetchError());
  }
}

export function* reposSaga() {
  yield takeLatest(fetchRepos, fetchReposHandler);
}