import React, { useState } from 'react';
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MoviesList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path='/' component={MoviesList}/>
        <Route path='/movies/:id' render={(matchProps) => 
          <Movie
            {...matchProps}
            addToSavedList = {addToSavedList}
          />
        }/>
      </div>
    </div>
  );
};

export default App;
