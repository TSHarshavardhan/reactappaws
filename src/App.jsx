// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  const students = [
    { id: 1, name: 'Alice', age: 20, gender: 'F' },
    { id: 2, name: 'Bob', age: 21, gender: 'M' },
    { id: 3, name: 'Charlie', age: 22, gender: 'M' },
    { id: 4, name: 'Diana', age: 20, gender: 'F' },
    { id: 5, name: 'Ethan', age: 23, gender: 'M' },
    { id: 6, name: 'Fiona', age: 19, gender: 'F' },
    { id: 7, name: 'George', age: 21, gender: 'M' },
    { id: 8, name: 'Hannah', age: 20, gender: 'F' },
    { id: 9, name: 'Ian', age: 22, gender: 'M' },
    { id: 10, name: 'Jill', age: 21, gender: 'F' }
  ];

  return (
    <div className="App">
      <h1>Student Table</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Age</th><th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td><td>{s.name}</td>
              <td>{s.age}</td><td>{s.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
