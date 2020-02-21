import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppWrapper from "./AppWrapper";
import { BrowserRouter } from "react-router-dom";
import JobsDispatch from "./providers/jobsProviders";
import JobReducer, { initialState } from "./reducers/reducer.js";
import * as serviceWorker from "./serviceWorker";
function App() {
  const [state, dispatch] = useReducer(JobReducer, initialState);
  return (
    <BrowserRouter>
      <JobsDispatch.Provider value={dispatch}>
        <AppWrapper jobs={state} />
      </JobsDispatch.Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
