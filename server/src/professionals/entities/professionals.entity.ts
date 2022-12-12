export default interface ProfessionalEntity {
  professionalId: string
  firstName: string
  lastName: string
  email: string
  password: string
  listOfCourses: Array<string>
}