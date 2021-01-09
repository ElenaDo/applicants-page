import React from 'react';
import './App.css';
import applicants from './data/MOCK_DATA.json';

function App() {
  return (
    <div className="App">
      <ul>
        {
          applicants.map((applicant) => <li>{applicant.lastName}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
