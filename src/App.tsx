import React from 'react';
import './App.css';
import applicants from './data/MOCK_DATA.json';
import ApplicantList from './components/ApplicantList';

function App() {
  return (
    <div className="App">
      <ApplicantList applicants={applicants as Applicant[]} />
    </div>
  );
}

export default App;
