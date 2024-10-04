const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      resolve(data);
    }, 1000);
  });

fetchData
  .then((data) => {
    console.log('Data received:', data);
    return data.id;
  })
  .then((id) => {
    console.log('ID:', id);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

