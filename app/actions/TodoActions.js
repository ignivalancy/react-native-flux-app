import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function toggleTodo(id) {
    dispatcher.dispatch({
        type: "TOGGLE_TODO",
        id
    });
}

export function reloadTodos() {
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //   console.log("got the data!", data);
    // })
    dispatcher.dispatch({ type: "FETCH_TODOS" });
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [{
                id: 113464613,
                text: "Introduction",
                complete: true
            }, {
                id: 235684679,
                text: "Flux Demo",
                complete: false
            }, {
                id: 235684676,
                text: "Redux Demo",
                complete: false
            }, {
                id: 235688679,
                text: "Redux Middleware's",
                complete: false
            }, {
                id: 235684179,
                text: "React Flux Router",
                complete: false
            }, {
                id: 235084169,
                text: "Redux - Thunk, Saga, Promise",
                complete: false
            }, {
                id: 235684109,
                text: "Redux Persist",
                complete: false
            }]
        });
    }, 1500);
}
