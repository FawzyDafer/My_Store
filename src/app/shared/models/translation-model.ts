export class TranslationModel{
    name: string;
    path: string;
    json: string[];
    
    constructor(obj?:any){
        this.name = obj.name && obj;
        this.path = obj && obj.path;
        this.json = obj && obj.json || [];
    }
}