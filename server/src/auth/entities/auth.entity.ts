import InstitutionEntity from "../../institution/entities/institutions.entity";
import ProfessionalEntity from "../../professionals/entities/professionals.entity";
import StudentEntity from "../../students/entities/students.entity";

export default interface AuthEntity {
  id: string
  token: string;
};

export type entity = "student" | "professional" | "institution";

export type entityData = ProfessionalEntity | StudentEntity | InstitutionEntity;