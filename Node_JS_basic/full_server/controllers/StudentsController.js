import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];
    try {
      const data = await readDatabase(dbPath);
      const fields = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let report = 'This is the list of our students\n';
      for (const field of fields) {
        report += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      }
      report = report.trim();
      return res.status(200).send(report);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(dbPath);
      const list = data[major] || [];
      return res.status(200).send(`List: ${list.join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
