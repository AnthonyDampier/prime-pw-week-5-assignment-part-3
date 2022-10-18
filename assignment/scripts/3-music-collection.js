console.log('***** Music Collection *****')
// Variable collection that starts with an empty array
let collection = [];

// 'addToCollection' function to take inputs 'title', 'artist', 'yearPublished'
function addToCollection(title, artist, yearPublished, trackName, duration){
    //create album with 'title', 'artist', 'yearPublished', 'track'[]
    album = {title, artist, yearPublished, tracks: [[trackName, duration]]};
    collection.push(album);
}

// Created 6 albums in collection array
addToCollection("title1", "artist1", "2021", 'track1', '2:23');
addToCollection("title2", "artist2", "2022");
addToCollection("title3", "artist3", "2021", 'appletrack', '2:11');
addToCollection("title4", "artist4", "2022");
addToCollection("title5", "Artist1", "2021");
addToCollection("title6", "artist1", "2023");
addToCollection("title1", "artist1", "2021", 'track2', '3:33');

testAlbum = {title: 'title4', artist: 'artist4', yearPublished: '2021', tracks: [['track1', '2:23'],['track2', '3:33'], ['track3', '4:44']]};

collection.push(testAlbum);


console.log(collection); //Prints array

// 'showCollection' function to print 'TITLE by ARTIST, published in YEAR'
function showCollection(){
    console.log('Length of collection:',collection.length);
    for (album of collection){
        console.log(album.title.toUpperCase(),' by ', album.artist.toUpperCase(),', published in ', album.yearPublished);
        console.log()
        for (track of album.tracks){
            console.log('Name:', track[0],'Duration:', track[1]);
        }
    }
}
console.log('*** showCollection() ***');
showCollection();

// 'findByArtist' will take 'artist' input and outputs array with all of 'artist''s albums residing in collection array
function findByArtist(artist){
    artistAlbums = [];
    for (let i = 0; i < collection.length; i++){
        if (collection[i].artist.toUpperCase() === artist.toUpperCase()){
            //console.log("Found artist album!");
            foundAlbum = collection[i].title;
            artistAlbums.push(foundAlbum);
        } 
        else {
            //console.log(artist, ' is not found in this album');
        }
    }
    return(artistAlbums);
}
console.log('*** findByArtist ***')
let foundAlbums = findByArtist("artist1");
console.log('expect the output of title1, title5 & title6:', foundAlbums);

foundAlbums = findByArtist("artist99");
console.log('expect the output of an empty array:', foundAlbums);


console.log('------------- BEGIN STRETCH ---------------')
//  ***STRETCH***

// 'search' 
// INPUT of 'artist' and 'year'

//FUNCTION
//// search items in 'collection matching *all* of search's criteria ('artist' & 'year') √

// OUTPUT 
// IF found items output array of items found. √
// ELSE IF no mathing items found output empty arrary
// ELSE no 'artist' or 'year' provided for input & return all albums in 'collection'

function search(artist, year, trackName){
    foundThruSearch = [];

    // Gives all searchable content
    if (artist === undefined || year === undefined){
        return collection;
    }

    // Search for all albums of a specific artist
    if (trackName === undefined){
        for (let i = 0; i < collection.length; i++){
            if (collection[i].artist.toUpperCase() === artist.toUpperCase() && collection[i].yearPublished === year){
                //console.log('found Artist in ', collection[i].title);
                foundThruSearch.push(collection[i]);
            }
            else {
                //console.log('Not Found');
            }
        }
        return foundThruSearch;
    }

    // Search for specific track
    if  (trackName !== undefined){
        //console.log('track search');
        for (let i = 0; i < collection.length; i++){
            //console.log(collection[i]);
            if (collection[i].artist.toUpperCase() === artist.toUpperCase() && collection[i].yearPublished === year){
                //console.log('found album:', collection[i]);
                for (let j = 0; j < collection[i].tracks.length; j++){
                    //console.log('All tracks in found album:', collection[i].tracks[j][0]);
                    if (trackName === collection[i].tracks[j][0]){
                        //console.log('Found track');
                        return collection[i];
                    }
                }
                // track was not found in albums; add track to album
                //console.log(collection[i].tracks.length);
            }

            // else {
            //     return 'Not Found';

        }
        //return foundThruSearch;
    }
    return 'NOT FOUND';
}

// console.log('Expect to output title1 & title5', search('artist1', '2021'));
// console.log('Expect an empty array:', search('appleSauce', '2022'));
// console.log('Expect a return of collection:',search());

console.log('*** search() ***');
//track testing
console.log('Expect to output title1:', search('artist1', '2021','track1'));
console.log('Expect to output title3:', search("artist3", "2021", 'appletrack'));
console.log('Expect to out NOT FOUND: ', search("Artist1", "2021", 'track3'));
console.log('Expect track found in title4: ', search("Artist4", "2021", 'track2'));
