import React from 'react';
import ApplicantCard from './ApplicantCard';

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
  return (
    <div>
      {
        Object.keys(grouped).map((groupName) => (
          <div key={groupName}>
            <h3>{groupName}</h3>
            {
              grouped[groupName as StatusTypes].map((applicant: Applicant) => (
                <ApplicantCard applicant={applicant as Applicant} key={applicant.id} />
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default ApplicantList;
