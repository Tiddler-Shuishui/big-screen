import React from 'react';
import {Routes, HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Config} from './pages/config';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/config" element={<Config/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
