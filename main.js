const inpt= document.querySelector('#inField');
const btn= document.querySelector('#addBtn');
const li= document.querySelector('#list');
let array;

btn.addEventListener('click', add);

window.onload= display();

function display(){
    if(localStorage.getItem('todo')== null){
        array= [];
    }else{
        array= JSON.parse(localStorage.getItem('todo'));
    };

    for(i= 0; i<array.length; i++){
        li.innerHTML+= array[i] + `<br>`;
    };
};

function add(){
    li.innerHTML= '';

    if(inpt.value.trim()!=0){
        array.push(inpt.value.trim());
        localStorage.setItem('todo', JSON.stringify(array));
        inpt.value= '';
        display();
    };
};

function del(){

};