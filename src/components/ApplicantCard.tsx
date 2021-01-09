import React from 'react';

import styles from './ApplicantCard.module.css';

export interface Applicant {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  status: 'Interested' | 'Appointment_Set' | 'Property_Viewed' | 'Offer_Accepted',
  appointmentDate: string | null,
  bid: number | null,
}

function ApplicantCard({ applicant }: { applicant: Applicant }): JSX.Element {
  return (
    <div className={styles.card}>
      <p>{ `${applicant.firstName} ${applicant.lastName}` }</p>
      <p>{ applicant.phoneNumber }</p>
      <p>{ applicant.email }</p>
      { applicant.appointmentDate && (
      <p>
        <span>{ applicant.status === 'Appointment_Set' ? 'Appointment' : 'Viewed' }</span>
        <span> </span>
        { applicant.appointmentDate }
      </p>
      )}
      { applicant.bid && (
      <p>
        Bid
        <span> </span>
        { applicant.bid }
        <span>€</span>
      </p>
      )}
    </div>
  );
}

export default ApplicantCard;
