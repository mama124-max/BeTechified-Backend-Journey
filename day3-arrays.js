const studentNames = ["Mama", "Mary", "Modou", "Burama"];

console.log(studentNames[0]); // Output: Mama
console.log(studentNames[1]); // Output: Mary

studentNames.push("Ousainou");
console.log(studentNames.length); // Output: 5

const backendTool = ["javascript", "Git", "Node", "Supabase",];
console.log(backendTools[0]); // Output: javascript

const backendTools = ["JavaScript", "Git", "Node"];

// Adding a new tool to the end of the array
backendTools.push("Supabase");

// Printing the updated array
console.log(backendTools); 
// Output: [ 'JavaScript', 'Git', 'Node', 'Supabase' ]

// Printing the total number of items
console.log(backendTools.length); 
// Output: 4