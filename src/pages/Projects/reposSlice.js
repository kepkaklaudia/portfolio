import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    status: "",
    repos: []
  },
  reducers: {
    fetchRepos: state => {
      state.status = "loading";
    },
    fetchReposSuccess: (state, {payload: repos}) => {
      state.repos = repos;
      state.status = "success";
    },
    fetchError: state => {
      state.status = "error";
    }
  },
});

export const { fetchRepos, fetchReposSuccess, fetchError } = reposSlice.actions;

const selectState = state => state.repos;

export const selectReposStatus = state => selectState(state).status;
export const selectRepos = state => selectState(state).repos;

export default reposSlice.reducer;