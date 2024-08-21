import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const AddTask = () => {
    if (newTask.trim() !== "") {
      console.log("new Task", newTask);
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTask = tasks.filter((_, taskIndex) => taskIndex !== index);
    console.log(updatedTask);
    setTasks(updatedTask);
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setEditText(tasks[index]);
  };

  const saveTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[currentTaskIndex] = editText;
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTaskIndex(null);
    setEditText("");
  };
  return (
    <div class="bg-purple-200 h-screen">
      <h1 class="font-sans text-4xl	subpixel-antialiased 	font-bold text-center text-gray-50 pt-10 pb-10 ">
        Task Master- manage your todos at one place
      </h1>
      <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg">
  <div>
    <h1 class = "subpixel-antialiased font-medium text-2xl text-center">todo</h1>
  </div>
  <div class="flex items-center space-x-4">
    <input
      class="w-80 rounded-lg border-2 border-solid"
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="add a new task"
    />
    <button
      class="bg-lime-950 hover:bg-lime-800 text-white rounded-md px-5 py-2"
      onClick={AddTask}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
    </button>
  </div>
</div>

      <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-10">
        <ul>
          {tasks.map((task, index) => (
            <li
              class="italic text-lg font-semibold flex justify-between items-center pt-5"
              key={index}
            >
              {isEditing && currentTaskIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span class="flex-grow">{task}</span>
              )}

              <button
                class="ml-12 bg-gray-500 hover:bg-gray-700 text-white rounded-xl px-5 py-2 "
                onClick={() =>
                  isEditing && currentTaskIndex === index
                    ? saveTask()
                    : startEditing(index)
                }
              >
                {isEditing && currentTaskIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                  </svg>
                )}
              </button>

              <button
                class=" ml-5 bg-red-700 hover:bg-red-900 text-white rounded-xl px-5 py-2 "
                onClick={() => removeTask(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
