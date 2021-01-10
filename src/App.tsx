import React from 'react';
import './App.css';
import applicants from './data/MOCK_DATA.json';
import ApplicantList from './components/ApplicantList';
import Filters from './components/Filters';
import backIcon from './assets/back.svg';

function App() {
  return (
    <div className="App">
      <span className="display-flex">
        <button type="button" className="button-link back-icon">
          <img src={backIcon} alt="back" className="" />
        </button>
        <h2 className="display-inline-block">Applicants</h2>
      </span>
      <Filters />
      <ApplicantList applicants={applicants as Applicant[]} />
    </div>
  );
}

export default App;
