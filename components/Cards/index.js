// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function createArticle(article){
    
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const aName = document.createElement('span');
    
    headline.textContent = article.headline;
    image.setAttribute('src', article.authorPhoto);
    aName.textContent = `By ${article.authorName}`;
    
    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(image);
    author.append(aName);
    
    return card;
    
}

const cardsContainer = document.querySelector('.cards-container');
let articlesArray = [];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        articlesArray = Object.values(response.data.articles);
        return articlesArray;
    }).then(arr =>{
        for(let i = 0; i < arr.length; i++){
            arr[i].forEach(function(art){
                cardsContainer.append(createArticle(art));
            })
        }
    })
    .catch(error =>{
        console.log(error);
    })