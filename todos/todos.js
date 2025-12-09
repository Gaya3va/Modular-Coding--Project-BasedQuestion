import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';
import { displayTodos } from './displayTodos.js';


// quick auth guard
const logged = localStorage.getItem('loggedInUser');
if(!logged){
// redirect to login
window.location.href = '/login.html';
}


// mount navbar/footer
const root = document.getElementById('root') || document.body;
root.prepend(createNavbar());
root.appendChild(createFooter());


const container = document.getElementById('todos-container');
const loading = document.getElementById('loading');


loading.textContent = 'Loading todos...';


fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => {
loading.textContent = '';
// optionally show only first 100
displayTodos(data.slice(0, 100), container);
})
.catch(err => {
loading.textContent = 'Failed to fetch todos.';
console.error(err);
});