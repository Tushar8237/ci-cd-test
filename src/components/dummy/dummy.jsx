// import React, { useState, useEffect } from "react";
// import ProgressBar from "./components/ProgressBar";
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList";
// import Pagination from "./components/Pagination";

// const App = () => {
//     const [tasks, setTasks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [taskPerPage] = useState(5);

//     // Load tasks from local storage if available
//     useEffect(() => {
//         const storageTask = JSON.parse(localStorage.getItem("task"));
//         if (storageTask) setTasks(storageTask);
//     }, []);

//     // Save the task to local storage when the task change
//     useEffect(() => {
//         localStorage.setItem("task", JSON.stringify(tasks));
//     }, [tasks]);

//     const addTask = (taskTitle) => {
//         const newTask = { id: Date.now(), title: taskTitle, completed: false };
//         setTasks([...tasks, newTask]);
//     };

//     // Toggle task completion
//     const toggleTaskCompletion = (taskId) => {
//         setTasks(
//             tasks.map((task) =>
//                 task.id === taskId ? { ...task, completed: !task.completed } : task
//             )
//         );
//     };

//     // Remove a task
//     const removeTask = (taskId) => {
//         setTasks(tasks.filter((task) => task.id !== taskId));
//     };

//     // Calculate progress
//     const completedTask = tasks.filter((task) => task.completed).length;
//     const totalTask = tasks.length;
//     const progressPercentage =
//         totalTask === 0 ? 0 : (completedTask / totalTask) * 100;

//     // pagination logic
//     const indexOfLastTask = currentPage * taskPerPage;
//     const indexOfFirstTask = indexOfLastTask - taskPerPage;
//     const currentTask = tasks.slice(indexOfFirstTask, indexOfLastTask);

//     return (
//         <div className="container">
//             <h1>To-Do List</h1>
//             <ProgressBar progress={progressPercentage}/>
//             <AddTask addTask={addTask} />
//             <TaskList
//                 tasks={currentTask}
//                 toggleTaskCompletion={toggleTaskCompletion}
//                 removeTask={removeTask}
//             />
//             <Pagination
//                 taskPerPage={taskPerPage}
//                 totalTask={tasks.length}
//                 currentPage={currentPage}
//                 setCurrentPage={setCurrentPage}
//             />
//         </div>
//     );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import ProductList from "./components/ProductList";
// import ProgressBar from "./components/ProgressBar";
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList";
// import Pagination from "./components/Pagination";

// const App = () => {
//     const [products, setProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const productPerPage = 5;

//     useEffect(() => {
//         // Fetch products from api when the component mounts
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch("https://fakestoreapi.com/products");
//                 const data = await response.json()
//                 if(!data) {
//                     console.log("Server error")
//                 }
//                 setProducts(data) // Set the products state with fetched data
//             } catch (error) {
//                 console.log("Error fetching products", error)
//             }
//         }

//         fetchProducts()
//     }, [])


//     // Calculate the total number of pages
//     const totalPages = Math.ceil(products.length / productPerPage)

//     // Pagination logic
//     // Calculate the indexes for slicing the product array
//     const indexOfLastProduct = currentPage * productPerPage
//     const indexOfFirstProduct = indexOfLastProduct - productPerPage

//     // Get the current set of products for the current page
//     const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1)
//         }
//     }

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1)
//         }
//     }


//     return (
//         <div className="container">
//             <h1>To-Do List</h1>

//             <ProductList products={currentProduct} />

//             <div>
//                 <button onClick={handlePrevPage} disabled={currentPage === 1}>
//                     Prev
//                 </button>
//                 <span>
//                     Page {currentPage} of {totalPages}
//                 </span>
//                 <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default App;

