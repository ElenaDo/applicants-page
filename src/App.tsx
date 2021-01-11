import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { homepage } from '../package.json';
import './styles.css';
import styles from './App.module.css';
import ApplicantList from './components/ApplicantList';
import Filters from './components/Filters';
import Stats from './components/Stats';
import Loading from './components/Loading';
import Error from './components/Error';
import backIcon from './assets/back.svg';

function App() {
  const [applicants, setApplicants] = useState([] as Applicant[]);
  const [filtered, setFiltered] = useState(applicants);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData() {
    setLoading(true);
    setError('');
    try {
      // artificial delay to see loading
      await new Promise((res, rej) => {
        setTimeout(res, 1000);
      });

      const prefix = process.env.PUBLIC_URL;
      const path = '/data/MOCK_DATA.json';
      const response = await axios.get(prefix + path);
      setApplicants(response.data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className={styles.upperPanel}>
        <span className="display-flex">
          <button type="button" className={`${styles.buttonLink} ${styles.backIcon}`}>
            <img src={backIcon} alt="back" className="" />
          </button>
          <h2 className="display-inline-block">Applicants</h2>
        </span>
        <Stats applicants={applicants} />
      </div>
      <Filters applicants={applicants} setFiltered={setFiltered} />
      {error && <Error message={error} reload={fetchData} />}
      {loading ? <Loading />
        : <ApplicantList applicants={filtered} />}
    </div>
  );
}

export default App;
