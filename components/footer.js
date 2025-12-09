export function createFooter(){
const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `<div class="container">© ${new Date().getFullYear()} Modular Todos App</div>`;
return footer;
}