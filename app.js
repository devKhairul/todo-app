
// Get the form element
const form = document.querySelector('.add');
// Get the todo list
const todos = document.querySelector('.todos');
// Get the search input form
const search = document.querySelector('.search input');


// Add new todo
form.addEventListener('submit', e => {
    e.preventDefault();
    let todo = form.add.value.trim();

    if ( todo.length > 0 ) {
        genTemplate(todo);    
        form.reset(); 
    }
});

// Delete a todo 
todos.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Generate a single todo list template
const genTemplate = todo => {
    
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    
    todos.innerHTML += html;
};


// Keyup event listener to search todos list
search.addEventListener('keyup', e => {
    
    search.addEventListener('keyup', () => {
        const term = search.value.trim().toLowerCase();
        
        filterTodos(term);
    });
});

// Filter Todos
const filterTodos = (term) => {
    Array.from(todos.children)
         .filter(todo => {
             return !todo.textContent.toLowerCase().includes(term);
         })
         .forEach(todo => {
             todo.classList.add('filtered');
         });
 
     Array.from(todos.children)
     .filter(todo => {
         return todo.textContent.toLowerCase().includes(term);
     })
     .forEach(todo => {
         todo.classList.remove('filtered');
     });    
 };