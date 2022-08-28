const React = require('react');

function error404() {
  console.log('error page called');
  return (
      <html>
        <h1>404 Error; Please click on the button to return Home.</h1>
        <a href="/">home</a>
      </html>
  );
};

module.exports = error404;



