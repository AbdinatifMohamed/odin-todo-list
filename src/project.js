export default class Project {
    #name;
    #tasks = [];
    #projectelement;
    #id;
    constructor(name, projectelement) {
      this.#name = name;
      this.#projectelement = projectelement;
      this.#id = crypto.randomUUID;
    }
    
    addTask(task){
        this.#tasks.push(task);
    }

    deleteTask(id){
        const removingTask = this.#tasks.find(task => task.getId() === id);
        removingTask.onDelete();
        this.#tasks = this.#tasks.filter(task => task.getId() !== id);
    }

    getName(){
        return this.#name;
    }

    getTasks(){
        return this.#tasks;
    }

    getProjectElement(){
        return this.#projectelement;
    }

    getId(){
        return this.#id;
    }

    onDelete(){
        this.#projectelement.remove();
    }
  }
  