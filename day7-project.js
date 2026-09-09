// ==========================================
// DAY 7: WEEK 1 MINI-PROJECT - BACKEND TRACKER
// ==========================================

// 1. Define an array of objects representing your learning stack
const learningStack = [
    { tool: "JavaScript Syntax", phase: 1, completed: true, difficulty: "Easy" },
    { tool: "Git & GitHub Workflow", phase: 1, completed: true, difficulty: "Medium" },
    { tool: "Loops & Arrays", phase: 1, completed: true, difficulty: "Medium" },
    { tool: "Objects & Key-Value Pairs", phase: 1, completed: true, difficulty: "Medium" },
    { tool: "Express.js Servers", phase: 2, completed: false, difficulty: "Hard" }
];

console.log(" BEETECHIFIED WEEK 1: LEARNING PROGRESS REPORT \n");

// 2. Use a for...of loop to iterate through the array of objects
for (const item of learningStack) {
    
    // 3. Use conditional logic to check completion status
    let statusMessage = "";
    if (item.completed === true) {
        statusMessage = "Status: [COMPLETED]";
    } else {
        statusMessage = "Status: [UPCOMING PHASE]";
    }

    // 4. Print out a clean formatted report for each tool
    console.log(`Tool: ${item.tool}`);
    console.log(`Phase: ${item.phase} | Difficulty: ${item.difficulty}`);
    console.log(`${statusMessage}`);
    console.log("----------------------------------------");
}