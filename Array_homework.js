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
  return todos5 = todos5.filter(todo => todo.id !== id)
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
  return todos6 = todos6.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
}

toggleCompletedById(2);

console.log(todos6);


// 7번
let todos7 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  return todos7 = todos7.map(todo => todo.completed === false ? {...todo, completed: !todo.completed} : todo);
}

toggleCompletedAll();

console.log(todos7);


// 8번
let todos8 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos8 = todos8.filter(todo => todo.completed === true)
}

console.log(countCompletedTodos());


// 9번
let todos9 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  // console.log(...todos9.map(todo => todo.id));
  // console.log(Math.max(1, 2, 3));
  // console.log(Math.max([1, ,2, 3]))
  return todos9 = Math.max(...todos9.map(todo => todo.id));
}

console.log(getMaxId());



