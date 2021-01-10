import React from 'react';
import ApplicantCard from './ApplicantCard';

import styles from './ApplicantList.module.css';

function ApplicantList({ applicants }: { applicants: Applicant[] }) {
  const grouped = applicants.reduce((acc, current) => {
    acc[current.status].push(current);
    return acc;
  }, {
    // explicitly set object keys to preserve order
    Appointment_Set: [] as Applicant[],
    Property_Viewed: [] as Applicant[],
    Interested: [] as Applicant[],
    Offer_Accepted: [] as Applicant[],
  });
  function groupTitle(title: string) {
    return title.replace('_', ' ');
  }
  return (
    <div>
      {
        Object.keys(grouped).map((groupName) => (
          <div key={groupName}>
            <h3 className={styles.groupTitle}>
              {groupTitle(groupName)}
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
        ))
      }
    </div>
  );
}

export default ApplicantList;
