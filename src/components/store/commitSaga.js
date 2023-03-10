import { call, put, takeEvery } from "redux-saga/effects";

import { getCommitSuccess } from "./slices/commitSlice";

function* workGetCommitFetch() {
  const commits = yield call(() =>
    fetch(
      "https://api.github.com/repos/octocat/hello-world/stats/commit_activity"
    )
  );
  const formattedCommits = yield commits.json();
  const formattedCommitsShortened = formattedCommits;
  yield put(getCommitSuccess(formattedCommitsShortened));
}

function* commitSaga() {
  yield takeEvery("commit/getCommitFetch", workGetCommitFetch);
}
export default commitSaga;
