import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import styles from './App.module.css';
import ApplicantList from './components/ApplicantList';
import Filters from './components/Filters';
import Stats from './components/Stats';
import Loading from './components/Loading';
import Error from './components/Error';
import backIcon from './assets/back.svg';

function App() {
  const [applicants, setApplicants] = useState([]);
  const [filtered, setFiltered] = useState(applicants as Applicant[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData() {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/data/MOCK_DATA.json');
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
        <Stats applicants={applicants as Applicant[]} />
      </div>
      <Filters applicants={applicants as Applicant[]} setFiltered={setFiltered} />
      {error && <Error message={error} reload={fetchData} />}
      {loading ? <Loading />
        : <ApplicantList applicants={filtered as Applicant[]} />}
    </div>
  );
}

export default App;
