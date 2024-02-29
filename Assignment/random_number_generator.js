function generateRandomNumberWithDelay(delay) {
    // Display initial message
    console.log(`Generating random number in ${delay} seconds...`);
  
    // Countdown interval
    let countdown = setInterval(() => {
      delay--;
  
      // Display remaining time
      console.log(`Time remaining: ${delay} seconds`);
  
      // Check if delay is completed
      if (delay === 0) {
        clearInterval(countdown);
  
        // Generate random number
        const randomNumber = Math.floor(Math.random() * 100);
  
        // Output the generated number
        console.log(`Random number: ${randomNumber}`);
      }
    }, 1000);
  }
  
  // Set the desired delay
  const delayInSeconds = 3;
  
  // Call the function with the specified delay
  generateRandomNumberWithDelay(delayInSeconds);
  


  