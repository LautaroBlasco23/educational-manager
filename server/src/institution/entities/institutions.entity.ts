export default interface InstitutionEntity {
  institutionId: string
  name: string
  email: string
  password:string
  listOfCourses: Array<string>
};