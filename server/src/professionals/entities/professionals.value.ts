import ProfessionalEntity from "./professionals.entity"

class ProfessionalValue implements ProfessionalEntity {
  professionalId: string
  firstName: string
  lastName: string
  email: string
  password: string
  listOfCourses: Array<string>


  constructor(firstName: string, lastName: string, email: string, password: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.professionalId = String(Math.floor(Math.random() * 10000));
    this.listOfCourses = [];
  }

  public appendNewCourse(courseId: string){
    this.listOfCourses.push(courseId);
  }

  public removeCourse(courseId: string){
    this.listOfCourses.splice(this.listOfCourses.indexOf(courseId),1);
  }

};

export default ProfessionalValue;