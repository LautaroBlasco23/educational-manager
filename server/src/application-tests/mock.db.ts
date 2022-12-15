// ============================================================== \\
// YOU CAN CHANGE THIS FILE TO USE THE MOCKED DATABASE YOU WANT   \\
// ============================================================== \\
import AuthEntity from "../auth/entities/auth.entity";
import ErrorEntity from "../error/entities/error.entity";
import CoursesEntity from "../courses/entities/courses.entity";
import StudentEntity from "../students/entities/students.entity";
import ProfessionalEntity from "../professionals/entities/professionals.entity";
import InstitutionEntity from "../institution/entities/institutions.entity";

import AuthRepository from "../auth/entities/auth.repository";
import StudentRepository from "../students/entities/students.repository";


// ============================================================== \\
// IN THIS CASE, MY DATABASES WILL BE ARRAYS (nothing special)    \\
// ============================================================== \\
const StudentsDataBase: Array<StudentEntity> = [];
const ProfessionalsDatabase: Array<ProfessionalEntity> = [];
const InstitutionsDatabase: Array<InstitutionEntity> = [];
const CoursesDataBase: Array<CoursesEntity> = [];

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

export const AuthDatabaseRepository: AuthRepository = {
  LoginEntity(email, password, entity) {
      
      // LOGIN FOR INSTITUTIONS
      if (entity === "institution") {
        for (let i = 0; i < InstitutionsDatabase.length; i++){
          if (InstitutionsDatabase[i].email == email && InstitutionsDatabase[i].password == password) {
            const {institutionId, name} = InstitutionsDatabase[i];
            const token = new authValue({
              id: institutionId,
              name: name,
              entity
            });
            return {token: token.getToken(), id: institutionId}
          }
        }
      } 

      // LOGIN FOR STUDENTS
      if (entity === "professional") {
        for (let i = 0; i < ProfessionalsDatabase.length; i++){
          if (ProfessionalsDatabase[i].email == email && ProfessionalsDatabase[i].password == password) {
            const {professionalId, firstName} = ProfessionalsDatabase[i];
            const token = new authValue({
              id: professionalId,
              name: firstName,
              entity
            });
            return {token: token.getToken(), id: professionalId}
          }
        }
      }

      // LOGIN FOR PROFESSIONALS
      if (entity === "student") {
        for (let i = 0; i < StudentsDataBase.length; i++){
          if (StudentsDataBase[i].email == email && StudentsDataBase[i].password == password) {
            const {studentId, firstName} = StudentsDataBase[i];
            const token = new authValue({
              id: studentId,
              name: firstName,
              entity
            });
            return {token: token.getToken(), id: studentId};
          }
        }
      }

      return {code: 400, message: "invalid credentials"}
  },

  RegisterEntity(entityData, entity) {
    // Common variables for any register operation
    let newEntityId: number = 0;
    let name: string = '';

    // REGISTER FOR INSTITUTIONS
    if (entity === "institution") {
      newEntityId = InstitutionsDatabase.push(entityData);
      name = entityData.name;
    } 

    // REGISTER FOR STUDENTS
    if (entity === "professional") {
      newEntityId = ProfessionalsDatabase.push(entityData);
      name = entityData.firstName;
    }

    // REGISTER FOR PROFESSIONALS
    if (entity === "student") {
      newEntityId = StudentsDataBase.push(entityData);
      name = entityData.firstName;
    }

    if (newEntityId === null) return {code: 500, message: "error creating entity"};

    const auth = new authValue({id: `${newEntityId}`, name, entity});

    return {token: auth.getToken(), id: `${newEntityId}`};
  },
}