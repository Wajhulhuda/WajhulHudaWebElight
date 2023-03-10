import { call, put, takeEvery } from "redux-saga/effects";
import { getReposSuccess } from "./slices/slices";

function* workGetRepoFetch() {
  const repos = yield call(() =>
    fetch(
      "https://api.github.com/search/repositories?q=created:>2023-01-03&sort=stars&order=desc"
    )
  );
  const formattedRepos = yield repos.json();
  const formattedReposShortened = formattedRepos;
  yield put(getReposSuccess(formattedReposShortened));
}

function* repoSaga() {
  yield takeEvery("repo/getReposFetch", workGetRepoFetch);
}
export default repoSaga;
