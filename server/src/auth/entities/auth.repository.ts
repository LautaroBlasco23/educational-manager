import InstitutionEntity from "../../institution/entities/institutions.entity";
import StudentEntity from "../../students/entities/students.entity";
import AuthEntity from "./auth.entity";

export default interface AuthRepository {
  Login: (email: string, password: string) => {id: string, token: AuthEntity}
  RegisterStudent: (student: StudentEntity) => {id: string, token: AuthEntity}
  RegisterInstitution: (institution: InstitutionEntity) => {id: string, token: AuthEntity}
}