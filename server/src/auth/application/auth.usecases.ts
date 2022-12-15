import AuthRepository from "../entities/auth.repository";

export default class AuthUseCases {
  constructor(private readonly authDatabaseRepo: AuthRepository){}

  public Login(email: string, password: string, entityType: string) {
    const auth = this.authDatabaseRepo.LoginEntity(email, password, entityType);
    if (!auth) return null;
    return auth;
  };

  public RegisterEntity(entityData: any, entityType: string) {
    const auth = this.authDatabaseRepo.RegisterEntity(entityData, entityType);
    if (!auth) return null;
    return auth;
  };
};