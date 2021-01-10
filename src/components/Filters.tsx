import React, { useState } from 'react';
import styles from './Filters.module.css';

function Filters() {
  const [searchText, setSearchText] = useState('');
  function search(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }
  return (
    <div className={styles.filterBlock}>
      <form onSubmit={(e) => e.preventDefault()}>
        <span className={styles.searchWrapper}>
          <input
            type="text"
            value={searchText}
            onChange={search}
            placeholder="Search for applicant"
          />
        </span>
        <div className={styles.selectors}>
          <select>
            <option defaultValue="">Bids</option>
            <option value="withBids">With bids</option>
          </select>
          <select>
            <option defaultValue="">Status</option>
            <option value="Appointment_set">Appointment Set</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filters;
