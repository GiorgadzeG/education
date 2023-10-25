function mySetTimeout(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  async function startGame() {
    try {
      await mySetTimeout(3000); 
      console.log("Game is ready!");
  
      await mySetTimeout(2000); 
      console.log("Delivering toys...");
  
      await mySetTimeout(1000); 
      console.log("Toys are sold!");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  startGame();
  