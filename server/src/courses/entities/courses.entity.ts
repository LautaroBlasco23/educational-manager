export default interface CoursesEntity {
  courseName: string
  courseId: string
  institutionId: string
  listOfProfessionals: Array<string>
  listOfStudents: Array<string>
}