interface Applicant {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  status: 'Interested' | 'Appointment_Set' | 'Property_Viewed' | 'Offer_Accepted',
  appointmentDate: string | null,
  bid: number | null,
}
