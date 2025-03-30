import Task from "./task";
import Project from "./project";

const projectdialog = document.querySelector('.projects__dialog');
const taskdialog = document.querySelector('.tasks__dialog');
const projectform = document.querySelector('.projects__form');
const taskform = document.querySelector('.tasks__form')
const projectbtn = document.querySelector('#project__new');
const taskbtn = document.querySelector('#tasks__new');
const projecttitle = document.querySelector('.tasks__projectname').firstElementChild;
const projectlist = document.querySelector('.projects__items');
const tasklist = document.querySelector('.tasks__lists');


/*
Task Template:
<div class="tasks__item">
    <div>
        <h4>GYM</h4>
        <div>
            <i class="ri-delete-bin-7-fill"></i>
            <i class="ri-checkbox-circle-fill"></i>
        </div>
    </div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium et labore ipsa, asperiores quisquam, totam explicabo harum ea, velit recusandae suscipit vel! Laboriosam consectetur eum illo aliquid distinctio libero.</p>
</div>

Project Template:
<button class="projects__item">
    <p>Default</p>
</button>
<button class="projects__item">
    <p>Important</p>
    <i class="ri-delete-bin-7-fill"></i>
</button>

*/

let currentProject;
let projects = [];


function updateTasks(){
    if (currentProject == undefined) return;
    tasklist.innerHTML = '';
    for (let i = 0; i < currentProject.getTasks().length; i++){
        tasklist.appendChild(currentProject.getTasks()[i].getTaskElement());
    }
}
function updateProjects(){
    projectlist.innerHTML = '';

    for (let i = 0; i < projects.length; i++){
        projectlist.appendChild(projects[i].getProjectElement);
    }
}


function createProject(name, deletable){
    const div  = document.createElement('div');
    const title = document.createElement('p');
    const deleteBtn = document.createElement('i');

    div.classList.add('projects__items');
    title.textContent = name;
    deleteBtn.classList.add('ri-delete-bin-7-fill');

    div.appendChild(title);
    deletable && div.appendChild(deleteBtn);
    const newProject = new Project(name, div);

    deleteBtn.addEventListener('click', () => {
        newProject.onDelete()
        projects = projects.filter(project => project.getId() !== newProject.getId);
        updateProjects();
        updateTasks();
    });
    div.addEventListener('click', () => {
        currentProject = newProject;
        updateProjects();
        updateTasks();
    });
    projects.push(newProject);
    updateProjects();
}

function createTask(project, name, desc, date, priority){
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('tasks__item');
    const seconddiv = document.createElement('div');
    const h4 = document.createElement('h4');
    const thirddiv = document.createElement('div');
    const deleteBtn = document.createElement('i');
    const completeBtn = document.createElement('i');
    deleteBtn.classList.add('ri-delete-bin-7-fill');
    completeBtn.classList.add('ri-checkbox-circle-fill')
    thirddiv.appendChild(deleteBtn);
    thirddiv.appendChild(completeBtn);
    seconddiv.appendChild(h4);
    seconddiv.appendChild(thirddiv);
    div.appendChild(seconddiv);
    p.textContent = desc;
    div.appendChild(p);
    const newTask = new Task(div, name, desc, date, priority);
    deleteBtn.addEventListener('click', () => project.deleteTask(newTask.getId()));
    project.addTask(newTask);
}


