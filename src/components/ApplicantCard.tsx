import React from 'react';
import dayjs from 'dayjs';

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
  function formatDate(date: string) {
    return dayjs(date).format('DD MMMM HH:mm');
  }
  function formatCurrency(amount: number) {
    const { format } = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', notation: 'compact' });
    return format(amount);
  }
  function getInitials() {
    const { firstName, lastName } = applicant;
    return `${firstName[0]}${lastName[0]}`;
  }
  return (
    <div className={styles.card}>
      <div className={`${styles.initials} text-bold`}>
        <p>{ getInitials() }</p>
      </div>
      <p className="text-bold">{ `${applicant.firstName} ${applicant.lastName}` }</p>
      <p>{ applicant.phoneNumber }</p>
      <p>{ applicant.email }</p>
      { applicant.appointmentDate && (
      <p className={`${styles.highlight} text-bold text-upper `}>
        <span>{ applicant.status === 'Appointment_Set' ? 'Appointment' : 'Viewed' }</span>
        <span> </span>
        { formatDate(applicant.appointmentDate) }
      </p>
      )}
      { applicant.bid && (
      <p className={`${styles.highlight} ${styles.bid} text-bold`}>
        Bid
        <span> </span>
        { formatCurrency(applicant.bid) }
      </p>
      )}
    </div>
  );
}

export default ApplicantCard;
