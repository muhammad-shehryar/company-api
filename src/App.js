// src/App.js
import React from 'react';
import companyData from './data.json';

const App = () => {
   return (
      <div style={{ padding: '20px' }}>
         <h1>Company Directory</h1>
         <h2>{companyData.company} - {companyData.location}</h2>
         
         {companyData.departments.map((department, index) => (
            <Department key={index} department={department} />
         ))}
      </div>
   );
};

// Department Component to render each department and its employees
const Department = ({ department }) => (
   <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
      <h3>Department: {department.name}</h3>
      
      {department.employees.map((employee, index) => (
         <Employee key={index} employee={employee} />
      ))}
   </div>
);

// Employee Component to render each employee and their skills
const Employee = ({ employee }) => (
   <div style={{ marginTop: '10px' }}>
      <h4>{employee.name} - {employee.position}</h4>
      <p><strong>Skills:</strong> {employee.skills.join(', ')}</p>
   </div>
);

export default App;
