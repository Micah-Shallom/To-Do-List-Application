const formBody = document.getElementById('form-body');
const form = document.getElementById('form');
const formInput = document.getElementById('formInput');
const addBtn = document.getElementById('addBtn');
const saveBtn = document.getElementById('saveBtn');
const editFormInput = document.getElementById('editFormInput');
const formList = document.querySelectorAll('.form-list');

const msgArr=[];

const updateMessageArray = (text) => {
  
  if(text==''){
    return false
  }else{
    msgArr.push(text);
  }

  formBody.insertAdjacentHTML('beforeend',`<div class="form-list p-2 d-flex justify-content-between  m-0">
  <div class="display-item w-75" id="display-item">${msgArr[msgArr.length-1]}</div>
  <div>
  <i class="fas fa-edit" id='editIcon'></i>
  <i class="fa fa-trash" id='deleteIcon' aria-hidden="true"></i>
  </div>
  </div>`);

  const max_List=msgArr.length;
  checkList(max_List);
  
};

//Remove message from array of messages
const removeMessage = () => {
  formBody.addEventListener('click', e => {
    let parent = e.target.parentElement.parentElement;
    if(e.target.id=='deleteIcon'){

      msgArr.filter((x,y)=>{
        if (x.includes(parent.children[0].textContent)){
          msgArr.splice(y,1)
          parent.remove();
          console.log(msgArr);
        }
        else{
          return false;
        }
    })
  }else if(e.target.id=='editIcon'){
    editFormInput.value=parent.children[0].textContent;
    
  }
})
};
removeMessage();

saveBtn.addEventListener('click', e => {
  e.preventDefault();
  msgArr.forEach((x,y) => {
    if(x==editFormInput.value){
      msgArr[y]=editFormInput.textContent;
    }
  });
  console.log(msgArr);
})

//Limit Number of to-dos to just 8 options.
const checkList = (max) => {
  if(max==8){
    addBtn.disabled=true;
  }else{
    addBtn.disabled=false;
  }
}



//Trigger Event On Submission
form.addEventListener('submit', e => {
  let text = formInput.value;
  e.preventDefault();
  updateMessageArray(text);
})


