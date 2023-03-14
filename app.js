// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const submitBtn= document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')
const grocery = document.getElementById('.grocery')

// edit option
let editElement;
let editFlag = false;
let editId = ''
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem)
// ****** FUNCTIONS **********
function addItem(e){
  e.preventDefault()
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********