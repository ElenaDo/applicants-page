import React from 'react';

export interface Applicant {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  status: 'Interested' | 'Appointment_Set' | 'Property_Viewed' | 'Offer_Accepted',
  appointmentDate: string | null,
  bid: number | null,
}

function ApplicantCard({ applicant }: { applicant: Applicant }): JSX.Element {
  return (
    <div>
      { applicant.lastName }
    </div>
  );
}

export default ApplicantCard;
