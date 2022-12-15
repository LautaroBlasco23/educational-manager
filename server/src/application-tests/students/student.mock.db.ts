import StudentEntity from "../../students/entities/students.entity";
import StudentRepository from "../../students/entities/students.repository";

const StudentsDataBase: Array<StudentEntity> = [];

export const StudentsDatabaseRepository: StudentRepository = {
  getAllStudents() {
      return StudentsDataBase;
  },

  getStudentByEmail(email) {
      const arrayWithUser = StudentsDataBase.filter(student => {
        student.email == email;
      });
      if (!arrayWithUser.length) return null;
      return arrayWithUser[0];
  },

  getStudentById(id) {
    const arrayWithUser = StudentsDataBase.filter(student => {
      student.studentId == id;
    });
    if (!arrayWithUser.length) return null;
    return arrayWithUser[0];
  },

  modifyStudent(id, student) {
      for (let i = 0; i < StudentsDataBase.length; i++) {
        if ( StudentsDataBase[i].studentId == id) {
          StudentsDataBase[i] == student;
          return id;
        }
      }
      return null;
  },

  deleteStudentById(id) {
    for (let i = 0; i < StudentsDataBase.length; i++) {
      if ( StudentsDataBase[i].studentId == id) {
        StudentsDataBase.slice(i, 1);
        return id;
      }
    }
    return null;
  },
}

