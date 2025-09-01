// 7-http_express.js
const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const report = [];
      report.push(`Number of students: ${students.length}`);

      const fields = {};
      for (const line of students) {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      for (const [field, list] of Object.entries(fields)) {
        report.push(
          `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
        );
      }

      resolve(report.join('\n'));
    });
  });
}

const app = express();
const dbPath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const report = await countStudents(dbPath);
    res.end(report);
  } catch (err) {
    res.end('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
