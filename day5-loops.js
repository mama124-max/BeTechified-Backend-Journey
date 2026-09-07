const backendTools = ["JavaScript", "Git", "Node", "Supabase"];

// A standard for loop
for (let i = 0; i < backendTools.length; i++) {
    console.log("Current tool: " + backendTools[i]);
}







const serverTools = ["Express", "Koa", "Hapi", "Fastify", "NetJs"];

for (let i = 0; i < serverTools.length; i++) {
    console.log("Server tools: " + serverTools[i]);
}


















// ==========================================
// DAY 5: LOOPS & AUTOMATED ITERATION
// ==========================================

// 1. THE CLASSIC FOR LOOP
// Best used when you need to know the index position (i) 
// or want to run a loop a specific number of times.
const backendTools = ["JavaScript", "Git", "Node", "Supabase"];

console.log("--- 1. Classic For Loop Output ---");

// Breakdown of (let i = 0; i < backendTools.length; i++):
// - let i = 0: Initializes a counter starting at index 0.
// - i < backendTools.length: Runs as long as i is less than the total item count.
// - i++: Increments the counter by 1 after each loop cycle.
for (let i = 0; i < backendTools.length; i++) {
    console.log(`Index ${i}: Working with ${backendTools[i]}`);
}


// 2. THE CLEANER FOR...OF LOOP
// Best used when you only care about the items themselves 
// and do not need to track index numbers.
console.log("\n--- 2. For...of Loop Output ---");

for (const tool of backendTools) {
    console.log(`Current tool: ${tool}`);
}


// 3. THE WHILE LOOP
// Best used when you need to repeat an action UNTIL a specific 
// condition changes (e.g., retrying a database connection or waiting on data).
console.log("\n--- 3. While Loop Output ---");

let retries = 0;
let connectionSuccessful = false;

// Will keep looping as long as connection is false AND retries are under 3
while (!connectionSuccessful && retries < 3) {
    retries++;
    console.log(`Attempting to connect to database... (Attempt ${retries})`);
    
    // Simulating a successful connection on the 3rd try
    if (retries === 3) {
        connectionSuccessful = true;
        console.log("Database connected successfully!");
    }
}