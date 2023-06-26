import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPages from './pages/StartPages';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Step3 from './pages/step3';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<StartPages />} />
          <Route path='step1' element={<Step1 />}  />
          <Route path='step2' element={<Step2 />} />
          <Route path='step3' element={<Step3 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
