const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Read the data from the JSON file
const employeesData = JSON.parse(fs.readFileSync('employees.JSON', 'utf8'));

// Endpoint to get all employees
app.get('/employees', (req, res) => {
  res.json(employeesData);
});

// Endpoint to get a specific employee by ID
app.get('/employees-challenge/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);
  const employee = employeesData.find(emp => emp.employeeID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
