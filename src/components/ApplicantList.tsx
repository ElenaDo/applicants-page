import React from 'react';
import ApplicantCard from './ApplicantCard';

function ApplicantList({ applicants }: { applicants: Applicant[] }) {
  return (
    <div>
      {
        applicants.map((applicant) => (
          <ApplicantCard applicant={applicant as Applicant} key={applicant.id} />))
      }
    </div>
  );
}

export default ApplicantList;
