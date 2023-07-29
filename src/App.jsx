import { useState } from "react";
import Form from "./Form";
import TodolList from "./TodolList";

function App() {
  const datas = JSON.parse(localStorage.getItem("data"))

  const [data, setData] = useState(datas || [])
  localStorage.setItem("data", JSON.stringify(data));
  return (
    <div className="app">
      <div className="d-flex flex-column  justify-content-center   col-sm-6 col-md-3  m-auto">
        <Form data={data} setData={setData} />
        <TodolList data={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;
