import CoursesEntity from "./courses.entity"

export default interface CourseRepository {
  // GET
  getInstitutionCourses: (institutionId: string) => Array<string>
  getProfessionalCourses: (professionalId: string) => Array<string>
  getStudentCourses: (studentId: string) => Array<string>

  // POST
  createNewCourse: (courseName: string, institutionId: string, listOfProfessionals: string[], listOfStudents: string[]) => CoursesEntity
  
  // PUT
  modifyCourse: (course: CoursesEntity) => string

  // DELETE
  deleteCourse: (id: string) => string
}