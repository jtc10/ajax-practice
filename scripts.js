//API Key: 9aaa7238526040c3af8996c732feb1ea

const key = '9aaa7238526040c3af8996c732feb1ea';
let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9aaa7238526040c3af8996c732feb1ea';


const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      for (let i = 0; i < data.articles.length; i++) {
        const container = document.createElement('div');
        const divCard = document.createElement('div');
        const divImage = document.createElement('div');
        const divTitle = document.createElement('div');
        const divText = document.createElement('div');
        const pDes = document.createElement('p');
        const pSource = document.createElement('p');

        document.getElementsByTagName('body')[0].appendChild(container);
        container.appendChild(divCard);
        container.appendChild(divImage);
        container.appendChild(divTitle);
        container.appendChild(divText);
        divCard.classList.add('card');
        divTitle.classList.add('title');
        divImage.classList.add('image');
        divText.classList.add('text-container');

        divText.appendChild(pDes);
        divText.appendChild(pSource);
        pDes.classList.add('description');
        pSource.classList.add('source');

        divImage.style.background = 'url('+ data.articles[i].urlToImage + ') center no-repeat';
        divImage.style.backgroundSize = 'cover';

        divTitle.textContent = data.articles[i].title;
        pDes.textContent = data.articles[i].description;
        pSource.textContent = data.articles[i].source.name;





      }
      // document.getElementById('title').textContent = data.articles[0].title;
    }
  }
};

xhr.open('GET', url);
xhr.send();
