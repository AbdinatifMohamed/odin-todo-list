import Task from "./task";
import Project from "./project";
import './style.css';
const projectdialog = document.querySelector('.projects__dialog');
const taskdialog = document.querySelector('.tasks__dialog');
const projectform = document.querySelector('.projects__form');
const taskform = document.querySelector('.tasks__form')
const projectbtn = document.querySelector('#projects__new');
const taskbtn = document.querySelector('#tasks__new');
const taskcancel = document.querySelector('.taskCancel');
const projectcancel = document.querySelector('.projectCancel');
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
        projectlist.appendChild(projects[i].getProjectElement());
    }
}


function createProject(name, deletable){
    const div  = document.createElement('div');
    const title = document.createElement('p');
    const deleteBtn = document.createElement('i');

    div.classList.add('projects__item');
    title.textContent = name;
    deleteBtn.classList.add('ri-delete-bin-7-fill');

    div.appendChild(title);
    deletable && div.appendChild(deleteBtn);
    const newProject = new Project(name, div);

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('clicked');
        newProject.onDelete()
        console.log(projects);
        projects = projects.filter(project => project.getId() !== newProject.getId());
        console.log(projects);
        updateProjects();
        updateTasks();
    });
    div.addEventListener('click', () => {
        console.log('clicked2');
        currentProject = newProject;
        projecttitle.textContent = currentProject.getName();
        updateProjects();
        updateTasks();
    });
    projects.push(newProject);
    updateProjects();
}

function createTask(project, name, desc, date, priority){
    if (currentProject == undefined) return;
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
    deleteBtn.addEventListener('click', () => {
        project.deleteTask(newTask.getId())
        updateTasks();
    });
    project.addTask(newTask);
}


projectbtn.addEventListener('click', () => projectdialog.showModal());
projectcancel.addEventListener('click', (e) => {
    e.preventDefault();
    projectdialog.close();
});
projectform.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(projectform);
    const name = form.get('projectTitle');
    createProject(name, true);
    projectdialog.close();
})
taskbtn.addEventListener('click', () => taskdialog.showModal());
taskcancel.addEventListener('click', (e) => {
    e.preventDefault();
    taskdialog.close();
});

taskform.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(taskform);
    const name = form.get('taskTitle');
    const desc = form.get('taskDesc');
    const date = form.get('taskDate');
    const priority = form.get('taskPriority');
    createTask(currentProject, name, desc, date, priority);
    taskdialog.close();
})
