import React from 'react';
import './styles.css';
import styles from './App.module.css';
import applicants from './data/MOCK_DATA.json';
import ApplicantList from './components/ApplicantList';
import Filters from './components/Filters';
import Stats from './components/Stats';
import backIcon from './assets/back.svg';

function App() {
  return (
    <div className="App">
      <div className={styles.upperPanel}>
        <span className="display-flex">
          <button type="button" className={`${styles.buttonLink} ${styles.backIcon}`}>
            <img src={backIcon} alt="back" className="" />
          </button>
          <h2 className="display-inline-block">Applicants</h2>
        </span>
        <Stats applicants={applicants as Applicant[]} />
      </div>
      <Filters />
      <ApplicantList applicants={applicants as Applicant[]} />
    </div>
  );
}

export default App;
