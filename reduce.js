/*
Implement the function getNumDirector that takes in an array of movie
objects. This function should use the native reduce method to return the number
of films directed by the input director.

example output:

  getNumDirector(collection, 'John Carpenter'); // => 2
*/

function getNumDirector(array, director){
  return array.reduce((acc, current) => {
    if (current.director === director){
      acc += 1;
    }
    return acc;
  }, 0);
}

/*
Implement the function getSuspenseTitles that takes in an array of movie objects.
This function should return an array of the titles of films that are Suspense.

example output:

    getSuspenseTitles(collection); // => ["Rear Window", "Psycho"]
*/

function getSuspenseTitles(array){
  return array.reduce((acc, current) => {
    if (current.genreTags.includes('Suspense')){
      acc.push(current.title);
    }
  }, []);
}

/*
Implement the function getNumDocumentaryFeatures that takes in an array of movie
objects. This function should use the native reduce method to return the number
of documentary special features.

example output:

  getNumDocumentaryFeatures(collection); // => 3
*/

function getNumDocumentaryFeatures(array){
  return array.reduce((acc, current) => {
    const features = current.specialFeatures;
    for (let i = 0; i < features.length; i++){
      if (features[i].type === 'Documentary'){
        acc += 1;
      }
    }
    return acc;
  }, 0);
}

/*
Implement the function reduceObjects that takes in an array of movie objects.
This function should return an object where each key is a movie and the value
at each key is the year in which it came out.

example output:
{
  "Rear Window": 1954,
  "Psycho": 1960,
  "The Thing": 1982,
  "Big Trouble in Little China": 1986,
  "Fright Night": 1985
}
*/

function reduceObjects(array){
  return array.reduce((acc, current) => {
    acc[current.title] = current.year;
    return acc;
  })
}