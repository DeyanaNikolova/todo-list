import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Todos from "./components/Todos";


function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(data => 
        setTodos(Object.values(data))
        );
  }, []);

  return (
    <div>

      <Header />

      <main className="main">


        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {/*} <Spinner /> */}

            <Todos todos={todos} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
