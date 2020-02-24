import React from 'react';
import Cocktail from './Cocktail'

const CocktailList = (props) => {
  if(props.loading) {
    return <h2 className='section-title'>Cocktails are loading. Please wait...</h2>
  }
  if(props.cocktails.length < 1) {
    return <h2 className='section-title'>No cocktails could be found with this name</h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {props.cocktails.map((item => {
          return <Cocktail key={item.id} {...item} />
        }))}
      </div>
    </section>
  );
}

export default CocktailList;
