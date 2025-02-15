// case add_task, delete_task, toggle_task
// {id, name, description, completed,  ......}
// add_task ==> push
// delete ==> filter
// toggle ==> find by id, if selectedid is aligned with found id
// toggle completed {completed: !toggle.completed}
// const TodoList = [{id, name, description, completed, .....}]

// review code dependencies

const App = () => {
	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
