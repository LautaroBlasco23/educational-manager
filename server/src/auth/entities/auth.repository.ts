import InstitutionEntity from "../../institution/entities/institutions.entity";
import ProfessionalEntity from "../../professionals/entities/professionals.entity";
import StudentEntity from "../../students/entities/students.entity";
import AuthEntity from "./auth.entity";

// Repository is divided so every entity has their own database.
export default interface AuthRepository {
  LoginEntity: (email: string, password: string, entity:string) => {id: string, token: AuthEntity};
  RegisterEntity: (entityData: any, entity: string) => {id: string, token: AuthEntity};
}