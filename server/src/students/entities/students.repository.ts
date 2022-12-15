import StudentEntity from "./students.entity"

export default interface StudentRepository {
  // GET
  getAllStudents: () => Array<StudentEntity> | null
  getStudentById: (id: string) => StudentEntity | null
  getStudentByEmail: (email: string) => StudentEntity | null
  
  // PUT
  modifyStudent: (id: string, student: StudentEntity) => string | null // student's ID

  // DELETE
  deleteStudentById: (id: string) => string | null // student's ID
}