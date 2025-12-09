import { storage } from '../utils/storage.js';


export function initSignupForm(formElement){
formElement.addEventListener('submit', (e)=>{
e.preventDefault();
const name = formElement.querySelector('[name="name"]').value.trim();
const email = formElement.querySelector('[name="email"]').value.trim().toLowerCase();
const password = formElement.querySelector('[name="password"]').value;


if(!name || !email || !password){
alert('Please fill all fields');
return;
}


const users = storage.read('users') || [];
if(users.find(u => u.email === email)){
alert('User with this email already exists');
return;
}


const newUser = { id: Date.now(), name, email, password };
users.push(newUser);
storage.write('users', users);


// set logged in user and redirect
localStorage.setItem('loggedInUser', JSON.stringify({ id:newUser.id, name:newUser.name, email:newUser.email }));
window.location.href = '/todos.html';
});
}