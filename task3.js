function randomPromise() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;
      setTimeout(() => {
        if (success) {
          resolve('Operation succeeded');
        } else {
          reject('Operation failed');
        }
      }, 500);
    });
  }
  
  randomPromise()
    .then((message) => {
      console.log('Success:', message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  