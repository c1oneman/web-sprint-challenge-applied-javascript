// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
// forgot to create branch

const entryPoint = document.querySelector('.cards-container');
axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(json => {
    var data = json.data.articles
    Object.keys(data).forEach(articleObj => {
        console.log(articleObj)
        data[articleObj].forEach(article => {
            entryPoint.appendChild(createCardFromArticle(article))
            console.log(article)
        })
    })
  })
  .catch(err => {
    console.log(err)
  })


function createCardFromArticle(article) {
    const card = document.createElement('card')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const spanAuthor = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = article.headline
    authorImg.setAttribute('src', article.authorPhoto)
    spanAuthor.textContent = article.authorName

    card.addEventListener('click', function(event) {
        console.log(headline.textContent);
    })

    card.appendChild(headline)
    imgContainer.appendChild(authorImg)
    author.appendChild(imgContainer)
    author.appendChild(spanAuthor)
    card.appendChild(author)


    return card
}
