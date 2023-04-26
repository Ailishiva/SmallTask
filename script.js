const cardContainer = document.getElementById('card-container');

fetch('https://www.reddit.com/r/reactjs.json')
  .then(response => response.json())
  .then(data => {
    const children = data.data.children;
    children.forEach(child => {
      const title = child.data.title;
      const selfTextHtml = child.data.selftext_html;
      const url = child.data.url;
      const score = child.data.score;

      const card = document.createElement('div');
      card.className = 'card';

      const titleElement = document.createElement('h2');
      titleElement.textContent = title;

      const selfTextHtmlElement = document.createElement('p');
      selfTextHtmlElement.innerHTML = selfTextHtml;

      const urlElement = document.createElement('a');
      urlElement.href = url;
      urlElement.textContent = url;
      urlElement.target = '_blank';

      const scoreElement = document.createElement('p');
      scoreElement.className = 'score';
      scoreElement.textContent = `Score: ${score}`;

      card.appendChild(titleElement);
      card.appendChild(selfTextHtmlElement);
      card.appendChild(urlElement);
      card.appendChild(scoreElement);

      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
