const post = {
    title: "ahihi",
    body: "anh Hoàng đzzz",
    author: "abc",
    views: 100,
    comments: [
      {author: 'anh Huân đzzz', body: "lewlew"},
      {author: 'anh Huân đzzz', body: "lewlew"},
    ],
    isLive: true
   }
   
function Post(title, body,author,views,comments,isLive)  {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
}

let x = new Post("Hello World", "Welcome to My Channel", "Mai The Doan", 10000000, [{author: "Mai The Doan Vip Pro", body: "Dz"}], false);
console.log(x);
