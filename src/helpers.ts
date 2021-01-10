export function getGroupTitle(title: string) {
  return title.replace('_', ' ');
}

export function groupApplicants(applicants: Applicant[]): ApplicantGroups {
  return applicants.reduce((acc, current) => {
    acc[current.status].push(current);
    return acc;
  }, {
    // explicitly set object keys to preserve order
    Appointment_Set: [] as Applicant[],
    Property_Viewed: [] as Applicant[],
    Interested: [] as Applicant[],
    Offer_Accepted: [] as Applicant[],
  });
}
