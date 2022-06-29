class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    }
    if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`;
    }
    return `${this._likes[0]} and ${
      this._likes.length - 1
    } others like this story!`;
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw Error("You can't like the same story twice!");
    }
    if (this.creator == username) {
      throw Error("You can't like your own story!");
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw Error("You can't dislike this story!");
    }
    this._likes = this._likes.filter((u) => u != username);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    let findId = this._comments.find((c) => c.Id == id);

    if (!id || !findId) {
      this._comments.push({
        Id: this._comments.length + 1,
        Username: username,
        Content: content,
        Replies: [],
      });
      return `${username} commented on ${this.title}`;
    }
    if (findId) {
      findId.Replies.push({
        Id: `${id}.${findId.Replies.length + 1}`,
        Username: username,
        Content: content,
      });
      return "You replied successfully";
    }
  }

  toString(sortingType) {
    let result = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this._likes.length}`,
      `Comments:`,
    ];
    if (sortingType == "asc") {
      this._comments
        .sort((a, b) => a.Id - b.Id)
        .forEach((c) => {
          c.Replies.sort((a, b) => a.Id - b.Id);
        });
      this._comments.forEach((c) => {
        result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
        c.Replies.forEach((c) => {
          result.push(`--- ${c.Id}. ${c.Username}: ${c.Content}`);
        });
      });
    } else if (sortingType == "desc") {
      this._comments
        .sort((a, b) => b.Id - a.Id)
        .forEach((c) => {
          c.Replies.sort((a, b) => b.Id - a.Id);
        });
      this._comments.forEach((c) => {
        result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
        c.Replies.forEach((c) => {
          result.push(`--- ${c.Id}. ${c.Username}: ${c.Content}`);
        });
      });
    } else if (sortingType == "username") {
      this._comments
        .sort((a, b) => a.Username.localeCompare(b.Username))
        .forEach((c) => {
          c.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
        });
      this._comments.forEach((c) => {
        result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
        c.Replies.forEach((c) => {
          result.push(`--- ${c.Id}. ${c.Username}: ${c.Content}`);
        });
      });
    }
    return result.join("\n");
  }
}



let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));

art
console.log(art._comments);