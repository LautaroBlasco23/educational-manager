import AuthRepository from "../entities/auth.repository";
import { entity, entityData } from "../entities/auth.entity";

export default class AuthUseCases {
  constructor(private readonly authDatabaseRepo: AuthRepository){}

  public Login(email: string, password: string, entityType: entity) {
    const auth = this.authDatabaseRepo.LoginEntity(email, password, entityType);
    if (!auth) return null;
    return auth;
  };

  public RegisterEntity(entityData: entityData, entityType: entity) {
    const auth = this.authDatabaseRepo.RegisterEntity(entityData, entityType);
    if (!auth) return null;
    return auth;
  };
};