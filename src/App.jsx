import { Routes, Route } from 'react-router-dom';
import './App.css'

import {
  Accounting, 
  Activity,
  Calender,
  Clients,
  Contacts,
  Dashboard,
  NotFound,
  Reports,
  Settings,
  Template
} from './pages';
import { Layout } from './pages/common/components';

function App() {

  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/calender" element={<Calender />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/template" element={<Template />} />
        <Route exact path="/accounting" element={<Accounting />} />
        <Route exact path="/activity" element={<Activity />} />
        <Route exact path="/reports" element={<Reports />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
