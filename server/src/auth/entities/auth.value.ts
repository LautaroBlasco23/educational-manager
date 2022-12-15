class authValue {
  token: string;

  // Entity can be one of ["professional, student, institution"]
  constructor({id, name, entity}: {id: string, name: string, entity: string}){
    this.token = `${id}-${name}-${entity}`;
  }
}