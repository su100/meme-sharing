import React from 'react';
import Router from 'components/Router';
import Layout from 'components/layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
