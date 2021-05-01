export class Model {
    user;
    items;

    constructor(){
        this.user = "Emre";
        this.items = [
            new TodoItem("Kahvaltı",true),
            new TodoItem("Spor",false),
            new TodoItem("Sinema",false),
            new TodoItem("Ders",false)
          ]
    }
}
export class TodoItem {
    description;
    action;

    constructor(description,action){
        this.description = description;
        this.action = action;
    }
}