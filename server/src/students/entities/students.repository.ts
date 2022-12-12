import StudentEntity from "./students.entity"

export default interface StudentRepository {
  // GET
  getAllStudents: () => Array<StudentEntity>
  getStudentById: (id: string) => StudentEntity
  getStudentByEmail: (email: string) => StudentEntity
  
  // PUT
  modifyStudent: (id: string, student: StudentEntity) => string // student's ID

  // DELETE
  deleteStudentById: (id: string) => string // student's ID
}