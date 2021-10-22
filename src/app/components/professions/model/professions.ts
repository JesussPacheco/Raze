import { ProfessionsI } from ".";
export class Professions{
    
    static nuevoProfession(obj: ProfessionsI){
        return new Professions(
            obj['id'],
            obj['name'],
            obj['description']
         );
            }

    constructor(
        public  id: number,
        public  name: string,
        public  description: string
    ){}

    get nombreCompleto(){
        return  this.name + ' - ' +this.description;
    }
}