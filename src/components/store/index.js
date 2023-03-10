import { configureStore } from "@reduxjs/toolkit";
import repoSlice from "./slices/slices";
import createSagaMiddleware from "@redux-saga/core";
import repoSaga from "./repoSaga";
import commitSlice from "./slices/commitSlice";
import commitSaga from "./commitSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    repos: repoSlice,
    commits: commitSlice,
  },
  middleware: [saga],
});
saga.run(repoSaga);
saga.run(commitSaga);
export default store;
