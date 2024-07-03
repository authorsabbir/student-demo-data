// index.js
import students from './src/students.js';

students.forEach(student => {
  console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Major: ${student.major}`);
});
