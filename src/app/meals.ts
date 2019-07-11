export class Meals {
  public editMeals:boolean;
  constructor(public id:number,public name: string, public calories: number, public details: string)
  {
    this.editMeals=false;
  }
}
