import React, { useState, useEffect } from 'react';
import { getGroupTitle } from '../helpers';
import styles from './Filters.module.css';

function Filters({ applicants, setFiltered }:
  {
    applicants: Applicant[],
    setFiltered: React.Dispatch<React.SetStateAction<Applicant[]>>
  }) {
  const publicUrl = process.env.PUBLIC_URL;
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  function search(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchText(value);
    window.history.replaceState(null, '', value ? `${publicUrl}/?search=${value}` : publicUrl);
  }
  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setFilterStatus(value);
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (typeof (searchQuery) === 'string') setSearchText(searchQuery);
  }, []);
  useEffect(filterApplicants, [searchText, filterStatus, applicants, setFiltered]);
  function checkIncludes(where: string, text: string): boolean {
    return where.toLowerCase().includes(text.toLocaleLowerCase());
  }

  function checkFilterStatus(where: Applicant, status: StatusTypes | string): boolean {
    if (status === '') return true;
    return where.status === status;
  }

  function filterApplicants() {
    const filtered = applicants.filter((applicant) => {
      const keep = (checkIncludes(applicant.firstName, searchText)
      || checkIncludes(applicant.lastName, searchText)
      || checkIncludes(applicant.email, searchText))
      && checkFilterStatus(applicant, filterStatus);
      return keep;
    });
    setFiltered(filtered);
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
            <option value="">Bids</option>
            <option value="withBids">With bids</option>
          </select>
          <select onChange={handleFilterChange} value={filterStatus}>
            <option value="">Status</option>
            { statusTypes
              .map((type) => <option value={type} key={type}>{getGroupTitle(type)}</option>)}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filters;
