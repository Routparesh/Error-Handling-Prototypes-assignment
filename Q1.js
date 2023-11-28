
function convertToNumber(num) {
    try {
        if (!/\D/.test(num)) {
            // Use parseFloat to handle decimal numbers
            const result = parseFloat(num);

            // Check if the result is a valid number
            if (!isNaN(result)) {
                console.log(result);
            } else {
                throw new Error('Invalid number');
            }
        } else {
            throw new Error('Invalid number');
        }
    } catch (error) {
        console.log(error.message);
    }
}

// Test case
convertToNumber('abc');  
