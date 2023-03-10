import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
  name: "repo",
  initialState: {
    repos: [],
    isLoading: false,
  },
  reducers: {
    getReposFetch(state) {
      state.isLoading = true;
    },
    getReposSuccess(state, action) {
      state.repos = action.payload;
      state.isLoading = false;
    },
    getReposFailure: (state) => {
      state.isLoading = false;
    },
  },
});
export const { getReposFetch, getReposSuccess, getReposFailure } =
  repoSlice.actions;
export default repoSlice.reducer;
