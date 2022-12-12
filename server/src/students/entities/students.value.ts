import StudentEntity from "./students.entity"

class StudentValue implements StudentEntity {
  studentId: string
  firstName: string
  lastName: string
  email: string
  listOfCourses: Array<string>
  password: string

  constructor(firstName: string, lastName: string, email: string, password: string){
    this.studentId = String(Math.floor(Math.random() * 10000));
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.listOfCourses = [];
    this.password = password;
  }
}

export default StudentValue;