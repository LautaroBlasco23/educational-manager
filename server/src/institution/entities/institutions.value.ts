class InstitutionValue {
  institutionId: string
  name: string
  email: string
  password:string
  listOfCourses: Array<string>

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.institutionId = String(Math.floor(Math.random() * 10000));
    this.listOfCourses = [];
  }

  public appendNewCourse(courseId: string) {
    this.listOfCourses.push(courseId);
  }

  public removeCourse(courseId: string) {
    if( this.listOfCourses.indexOf(courseId) == -1 ) return "invalid course ID";
    this.listOfCourses.splice(this.listOfCourses.indexOf(courseId), 1);
    return courseId;
  }
};

export default InstitutionValue;