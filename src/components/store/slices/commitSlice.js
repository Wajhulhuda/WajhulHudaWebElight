import { createSlice } from "@reduxjs/toolkit";

const commitSlice = createSlice({
  name: "commit",
  initialState: {
    commits: [],
    isLoading: false,
  },
  reducers: {
    getCommitFetch(state) {
      state.isLoading = true;
    },
    getCommitSuccess(state, action) {
      state.commits = action.payload;
      state.isLoading = false;
    },
    getCommitFailure: (state) => {
      state.isLoading = false;
    },
  },
});
export const { getCommitFetch, getCommitSuccess, getCommitFailure } =
  commitSlice.actions;
export default commitSlice.reducer;
