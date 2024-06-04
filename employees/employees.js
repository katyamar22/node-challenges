const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.use(express.json());


const employeesData = JSON.parse(fs.readFileSync('employees.JSON', 'utf-8'));


app.get('/employees', (req, res) => {
  res.json(employeesData);
});


app.get('/employees/:employeeID', (req, res) => {
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

