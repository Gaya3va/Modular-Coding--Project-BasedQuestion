import { storage } from '../utils/storage.js';


export function initLoginForm(formElement){
formElement.addEventListener('submit', (e)=>{
e.preventDefault();
const email = formElement.querySelector('[name="email"]').value.trim().toLowerCase();
const password = formElement.querySelector('[name="password"]').value;


const users = storage.read('users') || [];
const user = users.find(u => u.email === email && u.password === password);
if(!user){
alert('Invalid credentials');
return;
}


localStorage.setItem('loggedInUser', JSON.stringify({ id:user.id, name:user.name, email:user.email }));
window.location.href = '/todos.html';
});
}