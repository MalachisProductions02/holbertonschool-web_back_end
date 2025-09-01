import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1);
      const result = {};

      for (const line of students) {
        const [firstname,, , field] = line.split(',');
        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      }

      resolve(result);
    });
  });
}
