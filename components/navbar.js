export function createNavbar() {
const nav = document.createElement('nav');
nav.innerHTML = `
<div class="container" style="display:flex;align-items:center;justify-content:space-between">
<div class="brand">Modular Todos</div>
<div>
<a href="/index.html">Home</a>
<a href="/signup.html">Signup</a>
<a href="/login.html">Login</a>
<a href="/todos.html">Todos</a>
</div>
</div>
`;
return nav;
}