console.log("This is my index js file");

let source = 'bbc-news';

// Grab the news container'
let newsAccordion = document.getElementById('newsAccordion');

let apiKey = 'ea8989019ca1475cad8b68d0e62c2238';

// Create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ea8989019ca1475cad8b68d0e62c2238', true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function() {

    if (this.status === 200) {

        let json = JSON.parse(this.responseText);

        let articles = json.articles;

        console.log(articles);

        let newsHtml = "";

        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;

    } else {
        console.log("Some error occured")
    }
}

xhr.send()