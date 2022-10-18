console.log('***** Music Collection *****')
// Variable collection that starts with an empty array
let collection = [];

// 'addToCollection' function to take inputs 'title', 'artist', 'yearPublished'
function addToCollection(title, artist, yearPublished){
    //create album with 'title', 'artist', 'yearPublished'
    album = {title, artist, yearPublished};
    //append object 'album' to back of 'collection' array
    collection.push(album);
}

// Created 6 albums in collection array
addToCollection("title1", "artist1", "2021");
addToCollection("title2", "artist2", "2022");
addToCollection("title3", "artist3", "2021");
addToCollection("title4", "artist4", "2022");
addToCollection("title5", "Artist1", "2021");
addToCollection("title6", "artist2", "2023");

console.log(collection); //Prints array
// console.log(collection[0]); // Prints album of array[0]
// console.log(collection[1].title); // Prints title of array[0]

// 'showCollection' function to print 'TITLE by ARTIST, published in YEAR'
function showCollection(){
    console.log('Length of collection:',collection.length);
    for (album of collection){
        console.log(album.title.toUpperCase(),' by ', album.artist.toUpperCase(),', published in ', album.yearPublished);
        console.log()
    }
}

showCollection();

// 'findByArtist' will take 'artist' input and outputs array with all of 'artist''s albums residing in collection array
function findByArtist(artist){
    artistAlbums = [];
    for (let i = 0; i < collection.length; i++){
        if (collection[i].artist.toUpperCase() === artist.toUpperCase()){
            console.log("Found artist album!");
            foundAlbum = collection[i].title;
            artistAlbums.push(foundAlbum);
        } 
        else {
            console.log(artist, ' is not found in this album');
        }
    }
    return(artistAlbums);
}
let foundAlbums = findByArtist("artist1");
console.log('expect the output of title1 & title5:', foundAlbums);

foundAlbums = findByArtist("artist99");
console.log('expect the output of an empty array:', foundAlbums);