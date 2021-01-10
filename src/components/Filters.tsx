import React, { useState } from 'react';
import { getGroupTitle } from '../helpers';
import styles from './Filters.module.css';

function Filters() {
  const [searchText, setSearchText] = useState('');
  function search(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchText(value);
    window.history.replaceState(null, '', `/page/?search=${value}`);
  }
  const statusTypes: StatusTypes[] = ['Interested', 'Appointment_Set', 'Property_Viewed', 'Offer_Accepted'];
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
            { statusTypes.map((type) => <option value="type" key={type}>{getGroupTitle(type)}</option>) }
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filters;
