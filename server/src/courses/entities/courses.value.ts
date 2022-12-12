class CourseValue {
  courseName: string
  courseId: string
  institutionId: string
  listOfProfessionals: Array<string>
  listOfStudents: Array<string>

  constructor(courseName: string, institutionId: string){
    this.courseName = courseName;
    this.institutionId = institutionId;
    this.courseId = String(Math.floor(Math.random() * 10000));
    this.listOfProfessionals = [];
    this.listOfStudents = [];
  }

  public appendNewProfessional(professionalId: string): string | null {
    this.listOfProfessionals.push(professionalId);
    return professionalId;
  }

  public deleteProfessional(professionalId: string): string | null {
    if (this.listOfProfessionals.indexOf(professionalId) == -1) return null
    this.listOfProfessionals.splice(this.listOfProfessionals.indexOf(professionalId), 1);
    return professionalId;
  }

  public appendNewStudent(studentId: string): string {
    this.listOfStudents.push(studentId);
    return studentId;
  }

  public deleteStudent(studentId: string): string | null {
    if (this.listOfStudents.indexOf(studentId) == -1) return null
    this.listOfStudents.splice(this.listOfStudents.indexOf(studentId), 1);
    return studentId;
  }
}

export default CourseValue;