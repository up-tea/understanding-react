import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import './App.css';
import UseCallbackPage from './components/pages/UseCallbackPage';
import UseEffectPage from './components/pages/UseEffectPage';
import UseMemoPage from './components/pages/UseMemoPage';
import UseRefPage from './components/pages/UseRefPage';
import UseStatePage from './components/pages/UseStatePage';
import CustomHookPage from './components/pages/CustomHookPage';
import ErrorHandlePage from './components/pages/ErrorHandlePage';

function App() {
  return (
    <>
      <Router>
        <Route path="/state" component={UseStatePage}></Route>
        <Route path="/ref" component={UseRefPage}></Route>
        <Route path="/effect" component={UseEffectPage}></Route>
        <Route path="/memo" component={UseMemoPage}></Route>
        <Route path="/callback" component={UseCallbackPage}></Route>
        <Route path="/custom-hook" component={CustomHookPage}></Route>
        <Route path="/error-handle" component={ErrorHandlePage}></Route>
        <Route path="/" exact>
          <Redirect to="/state" />
        </Route>
      </Router>
    </>
  );
}

export default App;
