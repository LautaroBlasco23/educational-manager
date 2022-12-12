import InstitutionEntity from "./institutions.entity";

export default interface InstitutionRepository {
  // GET
  getAllInstitutions: () => Array<InstitutionEntity>
  getInstitutionById: (id: string) => InstitutionEntity
  
  // PUT
  modifyInstitution: (id: string, institution: InstitutionEntity) => string // Institution's id || error message
  
  // DELETE
  deleteInstitution: (id: string) => string // Institution's id || error message

};