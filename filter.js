/*
Implement the function getTwoWordTitles that takes in an array of movie objects.
This function should use the native filter method return a new array of only the
movie objects whose title is just two words.
*/

function getTwoWordTitles(array){
    return array.filter(function(movie) {
        return movie.title.split(' ').length === 2;
    });
};
console.log(getTwoWordTitles(collection));

/*
Implement the function getShortSpecialFeatures that takes in an array of movie objects.
This function should use the native filter method to return a new array of only the movie
objects that have a special feature that is less than 30 minutes.
*/

function getShortSpecialFeatures(array){
  return array.filter(function(movie){
    return movie.specialFeatures.filter(function(feature){
        return feature.length.match(/\d+/) <= 30;
    }).length > 0;
  });
};
console.log(getShortSpecialFeatures(collection));


/*
Implement the function getCommentaries that takes in an array of movie objects. This function
should use the native filter method to return a new array of only the movies that have a special
feature whose type is "Commentary"
*/

function getCommentaries(array){
  return array.filter(function(movie){
    return movie.specialFeatures.filter(function(feature){
        return feature.type === 'Commentary'
    }).length > 0;
  });
}

/*
Implement the function getEightiesHorror that takes in an array of movie objects. This function
should use the native filter method to return a new array of only the films that were made in
the 1980s and have 'Horror' in their genreTags array.
*/

function getEightiesHorror(array){
  return array.filter(function(movie){
    return movie.year >= 1980 && movie.year <= 1989 && movie.genreTags.includes('Horror');
  });
}
console.log(getEightiesHorror(collection));