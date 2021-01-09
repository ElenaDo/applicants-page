import React from 'react';
import './App.css';
import applicants from './data/MOCK_DATA.json';
import ApplicantCard, { Applicant } from './components/ApplicantCard';

function App() {
  return (
    <div className="App">
      <div>
        {
          applicants.map((applicant) => (
            <ApplicantCard applicant={applicant as Applicant} key={applicant.id} />))
        }
      </div>
    </div>
  );
}

export default App;
