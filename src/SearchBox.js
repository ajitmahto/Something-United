import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input
             className = 'tc bg-light-gray pa3 br2' 
             type = 'search' 
             placeholder = 'Superstar'
             onChange = {searchChange}
             />
        </div>
    );
}

export default SearchBox;