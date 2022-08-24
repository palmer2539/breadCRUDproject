const React = require('react');
const { lastIndexOf } = require('../models/bread');
const Default = require('./layouts/Default');

function Index ({breads}) {
  return(
    <Default>
      <h2>Index Page</h2>
      {/* <p>I have {breads[0].name} bread!</p> */}
      <ul>
        {
          breads.map((bread, index) => {
            return(<li key={index}>
              <a href={`/bread/${index}`}>
                {bread.name}
              </a>
            </li>)
          })
        }
      </ul>
    </Default>
  )
}

module.exports = Index