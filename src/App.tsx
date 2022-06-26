import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'components/Router';
import Layout from 'components/layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
