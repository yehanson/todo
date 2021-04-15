const inpt= document.querySelector('#inField');
const btn= document.querySelector('#addBtn');
const li= document.querySelector('#list');

btn.addEventListener('click', addText);

function addText(){
    textCont= document.createElement('div');
    textCont.classList.add('sameLine');
    li.appendChild(textCont);

    // local(inpt.value);

    textBox= document.createElement('p');
    textBox.innerHTML= inpt.value;
    textCont.appendChild(textBox);
    inpt.value= '';

    newBtn= document.createElement('button');
    newBtn.innerHTML= 'x'
    newBtn.classList.add('delete');
    newBtn.addEventListener('click', del);
    textCont.appendChild(newBtn);
};

function del(xb){
    item= xb.target
    if(item.classList[0] == 'delete'){
        item.parentElement.remove();
    };
};

/*
fuction local(td){
    let todo;
    if(localStorage.getItem('todo') == null){
        todo= [];
    }else{
        todo= JSON.parse(localStoraget.getItem('todo'));
    };
    
    todo.push(td);
    localStorage.setItem('todo', JSON.stringify(todo));
};
*/
