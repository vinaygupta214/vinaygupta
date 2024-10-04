function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  // Usage
  delay(1000).then(() => console.log('Executed after 1 second'));
  