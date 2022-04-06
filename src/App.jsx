import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { SampleActions } from './actions';
import './App.css'

import { Dashboard, NotFound, Template } from './pages';

function App() {

  // const dispatch = useDispatch();

  // const ip = useSelector((state) => !!state.sample && state.sample.ip) || '';

  // useEffect(() => {
  //   dispatch(SampleActions.sampleAction());
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/templates" element={<Template />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
