/*
Implement the function getTitleAndYear that takes in an array of movie objects.
This function should use the native map method to return a new array of each 
film's title and year surrounded by parentheses.

example output:

  [
    "Rear Window (1954)", 
    "Psycho (1960)", 
    "The Thing (1982)", 
    "Big Trouble in Little China (1986)"
    "Fright Night (1985)"
  ]
*/

function getTitleAndYear(array){
  return array.map(function(movie){
    return movie.title + ' ' + '(' + movie.year + ')';
  });
}
// console.log(getTitleAndYear(collection));

/*
Implement the function getLastSpecialFeature that takes in an array of movie objects.
This function should use the native map method to return an array of strings of each 
movie's last special feature type followed by its title.

example output:

  [
    "Interview - Hitchcock/Truffaut Interview Excerpts",
    "Commentary - Feature Commentary with Stephen Rebello",
    "Commentary - Feature Commentary with Star Kurt Russell and Director John Carpenter",
    "Interview - Vintage Interviews with Cast and Crew",
    "Interview - First Ever Fright Night Reunion Panel"
  ]
*/

function getLastSpecialFeature(array){
  return array.map(function(movie){
      let typeTitle = movie.specialFeatures[movie.specialFeatures.length - 1];
      return typeTitle.type + ' ' + '-' + ' ' + typeTitle.title;
    });
  }
console.log(getLastSpecialFeature(collection));

/*
Implement the function getMappedObjects that takes in an array of movie objects.
This function should use the native map method to return a new array of objects 
that is the title of the film with a key of genre that is set to the first genre 
in the genreTags array and a key of specialFeatures set to the number of special 
features.

example output:

[
  {
    title: 'Rear Window',
    genre: 'Mystery',
    specialFeatures: 3
  },
  {
    title: 'Psycho',
    genre: 'Horror',
    specialFeatures: 2
  },
  {
    title: 'The Thing',
    genre: 'Horror'
    specialFeatures: 1
  },
  {
    title: 'Big Trouble in Little China',
    genre: 'Comedy',
    specialFeatures: 3
  },
  {
    title: 'Fright Night',
    genre: 'Horror',
    specialFeatures: 2
  }
]
*/

function getMappedObjects(array){
  
}

/*
Implement the function getAllFeatures that takes in an array of movie objects.
This function should use the native map method to return an array of subarrays.
Each subarray should contain the type of the film's special features.

example output:

[
  ["Documentary", "Commentary", "Interview"],
  ["Documetnary", "Commentary"],
  ["Commentary"],
  ["Commentary", "Alternate Edits", "Interview"],
  ["Documentary", "Interview"]
]
*/

function getAllFeatures(array){
  
}
