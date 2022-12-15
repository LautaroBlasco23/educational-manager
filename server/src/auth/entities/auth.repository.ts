import ErrorEntity from "../../error/entities/error.entity";
import AuthEntity from "./auth.entity";
import { entity } from "./auth.entity";

export default interface AuthRepository {
  LoginEntity: (email: string, password: string, entity: entity) => AuthEntity | ErrorEntity;
  RegisterEntity: (entityData: any, entity: string) => AuthEntity | ErrorEntity;
}