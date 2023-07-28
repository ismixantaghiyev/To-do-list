import { useState } from "react";
import Form from "./Form";
import TodolList from "./TodolList";

function App() {
  const [data, setData] = useState([])
  return (
    <div>
      <div className="d-flex flex-column  justify-content-center w-25 m-auto">
        <Form data={data} setData={setData}/>
        <TodolList data={data} setData={setData}/>
      </div>
    </div>
  );
}

export default App;
