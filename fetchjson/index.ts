import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    //const todo = response.data
    //----this is if we use the interface todo
    const todo = response.data as Todo;

    const userId = todo.userId;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(userId, id, title, completed);
});

const logTodo = function (userId: number, id: number, title: string, completed: boolean) {
    console.log(`
        userId: ${userId};
        The to do with ID: ${id}
        has a title of: ${title}
        It is completed : ${completed}
    `);
}