const input= document.querySelector('.input');
const btn= document.querySelector('.btn');
const container= document.querySelector('.container');

btn.addEventListener('click', add);
container.addEventListener('click', del);

window.onload= display();

function add(){
    if(input.value != 0){
        const newDiv= document.createElement('div');
        container.appendChild(newDiv);
        
        const newLi= document.createElement('li');
        newLi.innerHTML= input.value;
        newDiv.appendChild(newLi);
        
        const newBtn= document.createElement('button');
        newBtn.innerHTML= 'x';
        newBtn.classList.add('delBtn');
        newDiv.appendChild(newBtn);

        setLocal();

        input.value= '';
    };
};

function del(e){
    if(e.target.classList== 'delBtn'){
        e.target.parentElement.remove();
        removeLocal(e);
    };
};

function setLocal(){
    let array;
    if(localStorage.getItem('todo')== null){
        array= [];
    }else{
        array= JSON.parse(localStorage.getItem('todo'));
    };
    
    array.push(input.value);
    localStorage.setItem('todo', JSON.stringify(array));
};

function display(){
    let array;
    if(localStorage.getItem('todo')== null){
        array= [];
    }else{
        array= JSON.parse(localStorage.getItem('todo'));
    };

    for(i= 0; i<array.length; i++){
        const newDiv= document.createElement('div');
        container.appendChild(newDiv);
        
        const newLi= document.createElement('li');
        newLi.innerHTML= array[i];
        newDiv.appendChild(newLi);
        
        const newBtn= document.createElement('button');
        newBtn.innerHTML= 'x';
        newBtn.classList.add('delBtn');
        newDiv.appendChild(newBtn);
    };
};

function removeLocal(e){
    let array;
    if(localStorage.getItem('todo')== null){
        array= [];
    }else{
        array= JSON.parse(localStorage.getItem('todo'));
    };
    
    array.splice(array.indexOf(e.target.parentElement.children[0].innerHTML), 1);
    localStorage.setItem('todo', JSON.stringify(array));
};