class AuthValue {
  token: string;

  // Entity can be one of ["professional, student, institution"]
  constructor({id, name, entity}: {id: string, name: string, entity: string}){
    this.token = `${id}-${name}-${entity}`;
  }

  public getToken(){
    return this.token;
  }

  public isValidToken(token: string) {
    if ( this.token === token ) return true
    return false
  }
}

export default AuthValue;