import React from 'react';
import ApplicantCard from './ApplicantCard';

import { getGroupTitle, groupApplicants } from '../helpers';
import styles from './ApplicantList.module.css';

function ApplicantList({ applicants }: { applicants: Applicant[] }) {
  if (!applicants.length) return <h3>Nothing to display</h3>;
  const grouped = groupApplicants(applicants);
  return (
    <div>
      {
        Object.keys(grouped).map((groupName) => (
          (grouped[groupName as StatusTypes].length > 0) && (
          <div key={groupName}>
            <h3 className={styles.groupTitle}>
              {getGroupTitle(groupName)}
              <span> </span>
              (
              {grouped[groupName as StatusTypes].length}
              )
            </h3>
            <div className={styles.groupContent}>
              {
                grouped[groupName as StatusTypes].map((applicant: Applicant) => (
                  <ApplicantCard applicant={applicant as Applicant} key={applicant.id} />
                ))
              }
            </div>
          </div>
          )
        ))
      }
    </div>
  );
}

export default ApplicantList;
