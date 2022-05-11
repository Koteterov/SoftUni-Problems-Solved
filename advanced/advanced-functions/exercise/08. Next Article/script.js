function getArticleGenerator(articles) {
  let divEl = document.getElementById("content");

  return function show() {
      
    if (articles.length) {
      let articleEl = document.createElement("article");
      articleEl.innerText = articles.shift();
      divEl.appendChild(articleEl);
    }
  };
}
