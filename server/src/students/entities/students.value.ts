class StudentValue {
  studentId: string
  firstName: string
  lastName: string
  email: string
  listOfCourses: Array<string>

  constructor(firstName: string, lastName: string, email: string){
    this.studentId = String(Math.floor(Math.random() * 10000));
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.listOfCourses = []
  }
}

export default StudentValue;