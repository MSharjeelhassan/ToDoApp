let h1 = document.createElement('h1')
// let textH1 = document.createTextNode('To Do App Manager');
h1.appendChild(document.createTextNode('To Do App Manager'))
document.body.appendChild(h1);
h1.className = 'mainheading';
console.log(h1);

let mainDiv = document.createElement('div');
mainDiv.className = 'mainDiv border';
mainDiv.id = 'mainDiv'
console.log(mainDiv);
document.body.appendChild(mainDiv)

let input = document.createElement('input');
input.className = 'input';
input.id = 'input';
input.setAttribute('placeholder', 'Enter the task')
console.log(input);
mainDiv.appendChild(input);
console.log(input);

let taskBtn = document.createElement('button');
let taskBtnText = document.createTextNode("Click to Add Task")
taskBtn.setAttribute("className", "btn");
taskBtn.setAttribute("onclick", "addTask()");
taskBtn.appendChild(taskBtnText);
mainDiv.appendChild(taskBtn);


console.log(taskBtn);

/*
let delAllBtn = document.createElement('button');
// delAllBtn.appendChild(document.createTextNode("Delete All"));//Sir yeh cheez nai chal rahe but why
let delAllBtnText;
delAllBtnText.innerHTML = 'Delete All'
delAllBtn.appendChild(delAllBtnText)
delAllBtn.className = "redbtn"
// mainDiv.appendChild(delAllBtn);
*/

let mainDelBtn = document.createElement('button');
let mainDelBtnText = document.createTextNode('Delete All');
mainDelBtn.appendChild(mainDelBtnText);
console.log(mainDelBtn);
mainDelBtn.className = "redBtn"
mainDelBtn.setAttribute('onclick', 'delAll()')
mainDiv.appendChild(mainDelBtn);

// var listDiv;
function addTask() {
    let MAINDIV = document.getElementById('MAINDIV');
    document.body.appendChild(MAINDIV)

    let listDiv = document.createElement('div');
    // let listDiv = document.getElementById('listDiv')
    listDiv.setAttribute('class', 'listDiv funborder');
    // listDiv.style.backgroundColor = "grey";
    MAINDIV.appendChild(listDiv)


    let ListDivP = document.createElement('P');
    let PText = document.createTextNode(input.value);
    ListDivP.className = "ListDivP"
    ListDivP.appendChild(PText);
    listDiv.appendChild(ListDivP);

    let editBtn = document.createElement('button');
    editBtn.setAttribute('className', 'btn');
    editBtn.setAttribute('id', 'btn');
    let editBtnText = document.createTextNode('Edit Task');
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onclick', 'editTask(this)');
    listDiv.appendChild(editBtn);

    let delBtn = document.createElement('button');
    delBtn.setAttribute('className', 'redBtn');
    let delBtnText = document.createTextNode('Delete Task');
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute('onclick', 'delTask(this)');
    listDiv.appendChild(delBtn);
}

function editTask(Element) {
    let userValue = prompt('Edit:')
    let a = Element.parentNode.firstChild;
    a.innerHTML = userValue;


    // let ListDivP = document.querySelector(".ListDivP.ListDivP");
    // let editInput = document.createElement('input')

    // console.log(ListDivP);
    // ListDivP.innerHTML = ListDivP.appendChild(editInput);

}

function delTask(del) {
    // let p = document.getElementsByClassName("ListDivP")
    let delTask = del.parentNode;
    console.log(delTask)
    // let pp = delTask.document.getElementsByClassName("ListDivP")[1]
    // console.log(pp)
    delTask.remove();
}

function delAll() {
    let MAINDIV = document.getElementById('MAINDIV');
    MAINDIV.innerHTML = '';
    let input= document.getElementById('input');
    input.value = "";

}