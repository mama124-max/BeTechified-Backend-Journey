const score = 85;

if (score >= 50) {
    console.log("Passed!");
} else {
    console.log("Try again!");
}




const userRole = "moderator";

if (userRole === "admin") {
    console.log("Full access granted. Welcome, Administrator.");
} else if (userRole === "moderator") {
    console.log("Limited access granted. You can review posts.");
} else {
    console.log("Guest access only. Please sign up.");
}





const isLoggedIn = true;
const hasSubscription = false;

// Both must be true to watch premium content
if (isLoggedIn && hasSubscription) {
    console.log("Playing video...");
} else {
    console.log("Please upgrade your subscription to watch.");
}