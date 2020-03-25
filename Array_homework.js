const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1번
function render() {
  let html = '';
  todos.forEach((todo) => {
    html += `<li id="${todo.id}">
    <label><input type="checkbox"${todo.completed ? 'checked' : ''}>${todo.content}</label>
  </li>`;
  });
  return html;
}

console.log(render());


// 2번
function getValues(key) {
  return todos.map((todo) => todo[key]);
}

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));


// 3번
function sortBy(key) {
  return todos.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)));
}
console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));


// 4번
let todos4 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {

  return todos4 = [newTodo, ...todos];
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos4);


// 5번
let todos5 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  return todos5 = todos5.splice(1, 1);
}

removeTodo(2);

console.log(todos5);


// 6번
let todos6 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
function toggleCompletedById(id) {
  
}

toggleCompletedById(2);

console.log(todos6);

