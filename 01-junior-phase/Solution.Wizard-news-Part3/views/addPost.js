const html = require("html-template-tag");

module.exports = (posts) => html`<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      <form method="post" action="/posts">
        <label for="name">Author</label>
        <input type="text" name="name" />
        <label for="title">Title</label>
        <input type="text" name="title" />
        <textarea name="content"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </body>
  </html>`;