
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  

  async function renderData() {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '<p>Loading...</p>';
  
    const data = await fetchData();
  
    if (data) {
      dataContainer.innerHTML = '';
      data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
          <h2>Id: ${item.id}</h2>
          <p>UserId ${item.userId}</p>
          <p>Title: ${item.title}</p>
          <p>Body: ${item.body}</p>
          <hr>
        `;
        dataContainer.appendChild(itemElement);
      });
    } else {
      dataContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
    }
  }
  
  window.onload = renderData;
  