function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is:`, factorial(number));