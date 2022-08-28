const React = require('react');

function Default(html) {
  return(
    <html>
      <head>
        <title>{html.title || 'Default'}</title>
      </head>
      <body>
        <div className="wrapper">
          <header>
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/breads">Breads</a>
            </span>
          </header>
        </div>
        <div className="container">
          {html.children}
        </div>
      </body>
    </html>
  )
}


module.exports = Default