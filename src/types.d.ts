type StatusTypes = 'Interested' | 'Appointment_Set' | 'Property_Viewed' | 'Offer_Accepted';

interface Applicant {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  status: StatusTypes,
  appointmentDate: string | null,
  bid: number | null,
}

interface ApplicantGroups {
  [index: StatusTypes]: Applicant[]
}
