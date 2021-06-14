function displayalbum(elementartistid){
    
    var artistid = elementartistid.value;
    console.log("hello ",elementartistid.dataset.allartists);
    var artists = JSON.parse(elementartistid.dataset.allartists);
    
    console.log(artistid);
    var artist = artists.find((a)=>a._id === artistid);
    var albumid = document.getElementById('albumid');
    var length = albumid && albumid.options.length;
        for (i = length-1; i >= 0; i--) {
            albumid.options[i] = null;
        }
        console.log(artist);
    if(artist.albums){
        // console.log(artist);
        artist.albums.forEach((a)=>{
            var option = document.createElement('option');
            option.text = a.name;
            option.value = a.name;
            albumid.add(option);

        })
    }
}

