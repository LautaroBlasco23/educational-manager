import ErrorEntity from "../../error/entities/error.entity";
import StudentEntity from "../entities/students.entity";
import StudentRepository from "../entities/students.repository";

class StudentsUseCases {
  constructor(private readonly studentRepo: StudentRepository){}

  public getAllStudents = (): Array<StudentEntity> | ErrorEntity => {
    const listOfStudents = this.studentRepo.getAllStudents();
    if (!listOfStudents) return {code: 500, message: "error getting list of users"};
    return listOfStudents;
  }

  public getStudentById = (id: string): StudentEntity | ErrorEntity => {
    const student = this.studentRepo.getStudentById(id);
    if (!student) return {code: 500, message: "Error getting student"};
    return student;
  }

  public getStudentByEmail = (email: string): StudentEntity | ErrorEntity => {
    const student = this.studentRepo.getStudentByEmail(email);
    if (!student) return {code: 500, message: "Error getting student"};
    return student;
  }

  public modifyStudent = (id: string, student: StudentEntity): string | ErrorEntity => {
    const modifiedStudentId: string | null = this.studentRepo.modifyStudent(id, student);
    if (!modifiedStudentId) return {code: 500, message: "Error in student modification"};
    return modifiedStudentId;
  }

  public deleteStudent = (id: string): string | ErrorEntity => {
    const deletedUserId: string | null = this.studentRepo.deleteStudentById(id);
    if (!deletedUserId) return {code: 500, message: "Error in student modification"};
    return deletedUserId
  }
};

export default StudentsUseCases;