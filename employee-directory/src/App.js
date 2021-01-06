import './App.css';
import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import EmployeeTable  from "./components/EmployeeTable";
import employeeAPI from "./utils/api";
import TableBody from './components/TableBody';

function App() {

  const [results, setResults] = useState([{}]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    employeeAPI.getEmployees()
    .then(res => {
        console.log(res.data);
        setResults(res.data.results)
    })
}, []);

  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <input placeholder="Search by employee name" value={search} onChange={e => setSearch(e.target.value)}></input>
        <EmployeeTable>
          <TableBody
          employees= { results }>
          </TableBody>
        </EmployeeTable>
      </Wrapper>
    </div>
  );
}

export default App;
