import React from 'react';
import styles from './Stats.module.css';
import { groupApplicants } from '../helpers';

function Stats({ applicants }: {applicants: Applicant[]}) {
  const grouped = groupApplicants(applicants);
  const stats = [
    {
      name: 'Total',
      value: applicants.length,
    },
    {
      name: 'New',
      value: grouped.Interested.length,
    },
    {
      name: 'Viewed',
      value: grouped.Property_Viewed.length,
    },
    {
      name: 'Appointment',
      value: grouped.Appointment_Set.length,
    },
    {
      name: 'Others',
      value: grouped.Offer_Accepted.length,
    },
  ];
  return (
    <div>
      <div className={styles.statList}>
        {stats.map((stat) => (
          <div className={styles.statItem} key={stat.name}>
            <p className="text-bold">{stat.value}</p>
            <p>{stat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
