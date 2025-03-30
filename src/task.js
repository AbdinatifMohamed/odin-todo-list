export default class Task {
    #name;
    #desc;
    #date;
    #priority;
    #id;
    #taskelement;

    constructor(taskelement, name, desc, date, priority) {
        this.#taskelement = taskelement
        this.#name = name;
        this.#desc = desc;
        this.#date = date;
        this.#priority = priority;
        this.#id = crypto.randomUUID();
    }

    // Getter methods to access private fields
    getName() {
        return this.#name;
    }

    getDesc() {
        return this.#desc;
    }

    getDate() {
        return this.#date;
    }

    getPriority() {
        return this.#priority;
    }

    getId() {
        return this.#id;
    }

    getTaskElement(){
        return this.#taskelement;
    }

    // Setter methods to set private fields;

    setName(name) {
        this.#name = name;
    }

    setDesc(desc) {
        this.#desc = desc;
    }

    setDate(date) {
        this.#date = date;
    }

    setPriority(priority) {
        this.#priority = priority;
    }


    onDelete(){
        this.#taskelement.remove();
    }
    
  }
  