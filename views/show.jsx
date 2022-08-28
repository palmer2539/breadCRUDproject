const React = require('react');
const Default = require('./layouts/default');

function Show({bread}) {
  console.log(bread.name)
  return (
    <Default>
      <h1>This is {bread.name} bread!</h1>
      <p>
        {bread.name} bread
        {
          bread.hasGluten
          ? <span> does </span>
          : <span> does NOT </span>
        }
        have gluten.
      </p>
      <img className='breadPics' src={bread.image} alt={bread.name} />
    </Default>
  );
};

module.exports = Show