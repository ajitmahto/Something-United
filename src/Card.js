import React from 'react';

const Card = ({name, position, id}) => {
  return (
    <div className = 'tc br4 bg-white pa3 dib ma2 grow bw2 shadow-3'>
      <img alt = 'Manchester' src={`https://picsum.photos/id/${id}/200/200`} />
      <div>
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  )
}


export default Card;
