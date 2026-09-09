// 1. Build your student profile object (your labeled backpack)
const studentProfile = {
    name: "Fatou",
    matricNumber: "GAM-2026-042",
    course: "Web Development",
    isEnrolled: true
};

// 2. Practice accessing a property using dot notation
console.log("The student's name is: " + studentProfile.name);
console.log("Matriculation Number: " + studentProfile.matricNumber);

// 3. Practice updating a value (changing the course)
studentProfile.course = "Advanced Backend Development";

// 4. Print the whole thing to see the update
console.log("Updated Profile:", studentProfile);


















// ==========================================
// DAY 6: OBJECTS & KEY-VALUE PAIRS
// ==========================================

// 1. CREATING A STRUCTURED OBJECT
// Objects use key-value pairs to bundle related data together 
// instead of relying purely on index numbers like arrays.
const studentProfile = {
    name: "Fatou",
    matricNumber: "GAM-2026-042",
    course: "Advanced Backend Development",
    isEnrolled: true
};

// 2. ACCESSING PROPERTIES (Dot Notation vs Bracket Notation)
console.log("The student's name is: " + studentProfile.name);
console.log("Matriculation Number: " + studentProfile.matricNumber);

// 3. UPDATING AND ADDING PROPERTIES
// Updating an existing value
studentProfile.course = "Advanced Backend Development";

// Printing the modified object structure
console.log("Updated Profile:", studentProfile);