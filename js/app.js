document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const form = document.querySelector('#form');
  form.addEventListener('submit', ()=>{
    console.dir(event.target);
  event.preventDefault();
  const firstName = event.target.firstname.value;
  const lastName = event.target.lastname.value;
  const age = event.target.age.value;
  let readingList = document.createElement('li');
  readingList.textContent = `firstname : ${firstName} lastname: ${lastName} age: ${age}`;
  const list = document.querySelector("#list");
  list.appendChild(readingList);


  const deleteAll = document.querySelector("#delete-all");
  deleteAll.addEventListener('click', () => {
    list.innerHTML = '';

    // const deleteAllButton = document.querySelector('#delete-all');
    // deleteAllButton.addEventListener('click', ()=>{
    //   newReadingItem.innerHTML = '';
    //   console.log("hhhhh")

  });
  });
});
