// Immediately Invoked Function Expressions (IIFE)

// stop pollution from global polllution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// give semicolon to context end
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Adarsh')