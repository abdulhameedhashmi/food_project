export class Foods{
    name!:string;
    id!:number;
    price!:number;
    favorite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}