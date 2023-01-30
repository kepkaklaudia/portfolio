import { configureStore } from '@reduxjs/toolkit';
import reposReducer from "./pages/Projects/fetchRepos/reposSlice";
import createSagaMiddleware from "redux-saga";
import { reposSaga } from "./pages/Projects/fetchRepos/reposSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(reposSaga);

export default store;