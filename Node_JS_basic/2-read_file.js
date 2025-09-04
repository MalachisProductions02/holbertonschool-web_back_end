// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf-8');

    // Split, trim, and drop empty lines (trailing blanks are not valid students)
    const lines = content
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Remove header
    const rows = lines.slice(1);

    // Group by field (4th column) and collect first names (1st column)
    const byField = {};
    let total = 0;

    for (const row of rows) {
      const cols = row.split(',');
      if (cols.length < 4) continue; // skip malformed rows

      const firstName = cols[0].trim();
      const field = cols[3].trim();
      if (!firstName || !field) continue;

      if (!byField[field]) byField[field] = [];
      byField[field].push(firstName);
      total += 1;
    }

    console.log(`Number of students: ${total}`);
    // Print in insertion order (objects preserve key order for string keys)
    Object.keys(byField).forEach((field) => {
      const list = byField[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    });
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
