const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      resolve(data);
      // Or in case of error:
      // reject('Error fetching data');
    }, 1000);
  });
  console.log(fetchData);
  console.log('End of script');

