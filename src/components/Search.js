import React from 'react';
import { MdSearch } from 'react-icons/md';
function Serach({ handleSearch }) {
  return (
    <div className="search">
      <MdSearch></MdSearch>
      <input
				onChange={(event) =>
					handleSearch(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
        className='input'
			/>
    </div>
  );
}

export default Serach;
