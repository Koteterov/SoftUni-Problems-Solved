class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    if (!this.possibleArticles[articleModel]) {
      throw new Error("This article model is not included in this gallery!");
    }

    let article = this.listOfArticles.find((x) => x.articleName == articleName);

    if (article == undefined) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    if (article.articleName == articleName) {
      article.quantity += quantity;
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
  }

  inviteGuest(guestName, personality) {
    let invitedGuest = this.guests.find((x) => x.guestName == guestName);

    if (invitedGuest == undefined) {
      if (personality == "Vip") {
        this.guests.push({ guestName, points: 500, purchaseArticle: 0 });
      } else if (personality == "Middle") {
        this.guests.push({ guestName, points: 250, purchaseArticle: 0 });
      } else {
        this.guests.push({ guestName, points: 50, purchaseArticle: 0 });
      }
    } else {
      throw new Error(`${guestName} has already been invited.`);
    }
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let artNameFound = this.listOfArticles.find((x) => x.articleName == articleName);
    let guestFound = this.guests.find((x) => x.guestName == guestName);
    if (
      artNameFound == undefined ||
      artNameFound.articleModel != articleModel
    ) {
      throw new Error("This article is not found.");
    }

    if (artNameFound.quantity == 0) {
      return `The ${articleName} is not available.`;
    }

    if (guestFound == undefined) {
      return "This guest is not invited.";
    } else {
      if (this.possibleArticles[articleModel] > guestFound.points) {
        return "You need to more points to purchase the article.";
      } else {
        guestFound.points -= this.possibleArticles[articleModel];
        artNameFound.quantity--;
        guestFound.purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
      }
    }
  }

  showGalleryInfo(criteria) {
    if (criteria == "article") {
      let result = ["Articles information:"];
      this.listOfArticles.forEach((x) => {
        result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`);
      });
      return result.join("\n");
    } else if (criteria == "guest") {
      let result = ["Guests information:"];
      this.guests.forEach((x) => {
        result.push(`${x.guestName} - ${x.purchaseArticle}`);
      });
      return result.join("\n");
    }
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 2));
console.log(artGallery.addArticle("Item", "Ancient vase", 100));
console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));
console.log(artGallery.addArticle("PICTURE", "Mona Liza", 10));
artGallery;

// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
// console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
// console.log(artGallery.buyArticle("item", "Mona Liza", "John"));

// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// artGallery.buyArticle("picture", "Mona Liza", "John");
// artGallery.buyArticle("item", "Ancient vase", "Peter");
// console.log(artGallery.showGalleryInfo("article"));
// console.log(artGallery.showGalleryInfo("guest"));
