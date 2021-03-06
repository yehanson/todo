const input= document.querySelector('.input');
const btn= document.querySelector('.btn');
const container= document.querySelector('.container');
const ed= document.querySelector('.ed');
const dl= document.querySelector('.dl');
const ul= document.querySelector('.ul');
let array;
let placeholder;

btn.addEventListener('click', add);
container.addEventListener('click', button);
ed.addEventListener('click', button);
dl.addEventListener('click', download);
ul.addEventListener('change', upload);

window.onload= display();

function add(){
    if(input.value != 0){
        const newDiv= document.createElement('div');
        container.appendChild(newDiv);
        
        const newLi= document.createElement('li');
        newLi.innerHTML= input.value;
        newDiv.appendChild(newLi);

        const newBtn1= document.createElement('button');
        newBtn1.innerHTML= 'Edit';
        newBtn1.classList.add('edBtn');
        newDiv.appendChild(newBtn1);
        
        const newBtn2= document.createElement('button');
        newBtn2.innerHTML= 'x';
        newBtn2.classList.add('delBtn');
        newDiv.appendChild(newBtn2);

        setLocal();

        input.value= '';
    };
};

function button(e){
    if(e.target.classList== 'edBtn'){
        if(ed.hasChildNodes()){
            ed.innerHTML= '';
        };
        const editDiv= document.createElement('div');
        ed.appendChild(editDiv);
        
        const newInput= document.createElement('input');
        placeholder= array.indexOf(e.target.parentElement.children[0].innerHTML);
        newInput.value= e.target.parentElement.children[0].innerHTML;
        editDiv.appendChild(newInput);

        const finBtn= document.createElement('button');
        finBtn.innerHTML= 'Finish Edit';
        finBtn.classList.add('finBtn');
        editDiv.appendChild(finBtn);
    }else if(e.target.classList== 'delBtn'){
        e.target.parentElement.remove();
        removeLocal(e);
    }else if(e.target.classList== 'finBtn'){
        array[placeholder]= e.target.parentElement.children[0].value;
        console.log(array);
        localStorage.setItem('todo', JSON.stringify(array));
        window.location.reload();
    };
};

function setLocal(){
    if(localStorage.getItem('todo')== null){
        array= [];
    }else{
        array= JSON.parse(localStorage.getItem('todo'));
    };
    
    array.push(input.value);
    localStorage.setItem('todo', JSON.stringify(array));
};

function display(){
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

        const newBtn1= document.createElement('button');
        newBtn1.innerHTML= 'Edit';
        newBtn1.classList.add('edBtn');
        newDiv.appendChild(newBtn1);
        
        const newBtn= document.createElement('button');
        newBtn.innerHTML= 'x';
        newBtn.classList.add('delBtn');
        newDiv.appendChild(newBtn);
    };
};

function removeLocal(e){
    if(localStorage.getItem('todo')== null){
        array= [];
    }else{
        array= JSON.parse(localStorage.getItem('todo'));
    };

    array.splice(array.indexOf(e.target.parentElement.children[0].innerHTML), 1);
    localStorage.setItem('todo', JSON.stringify(array));
};

function download(){
    const newdl= document.createElement('a');
    //mime type for json 'data:application/json;charset=utf-8,'
    newdl.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(array)));
    newdl.setAttribute('download', 'array');
    newdl.style.display= 'none';
    document.body.appendChild(newdl);
    newdl.click();
    document.body.removeChild(newdl);
};

function upload(){
    const read= new FileReader();
    read.readAsText(ul.files[0]);
    read.onload= function(){
        let newarrayv= JSON.parse(read.result);
        let newarrayl= JSON.parse(read.result).length;
        
        for(x=0; x<newarrayl; x++){
            array.push(newarrayv[x]);
            localStorage.setItem('todo', JSON.stringify(array));
        };
    };
    window.location.reload();
};