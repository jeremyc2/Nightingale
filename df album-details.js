function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getAlbumInformation() {
    var vars = getUrlVars();
    console.log(vars);

    switch(vars.album) {
        case "princeRoyceTopSongs":
          return princeRoyceTopSongs;
    }

}

function loadSongs() {

    var album = getAlbumInformation();

    var songDiv = document.getElementsByClassName("grid-container-album-details")[0];

    var i;
    for (i = 0; i < album.songs.length; i++) {

        var songNode = document.createElement("div");
        songNode.className = "song";
        
        // Create the contents of song node
        var indexNode = document.createElement("div");
        var textNode = document.createTextNode(i + 1);
        indexNode.appendChild(textNode);

        var titleNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].title);
        titleNode.appendChild(textNode);

        var artistNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].artist);
        artistNode.appendChild(textNode);

        var timeNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].time);
        timeNode.appendChild(textNode);

        var ratingNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].rating);
        ratingNode.appendChild(textNode);

        var priceNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].price);
        priceNode.appendChild(textNode);        
        
        var cartNode = document.createElement("div");

        // Create img to cart node
        var imgNode = document.createElement("img");
        
        // Add class,src, and touch events to img
        imgNode.className = "shopping-green";
        imgNode.src = "icons/shopping-green/shopping-green.svg";
        imgNode.onmouseover = function(){
                                mouseover(this,'icons/' + this.className + '/' + this.className + ' hover.svg')
                            };
        imgNode.onmouseout= function(){
                                mouseout(this,'icons/' + this.className + '/' + this.className + '.svg')
                            };
        imgNode.onmousedown= function(){
                                mousedown(this,'icons/' + this.className + '/' + this.className + ' clicked.svg')
                            };
        imgNode.onmouseup= function(){
                                if (this.className == 'shopping-green') 
                                    this.className = 'shopping-orange'; 
                                else 
                                    this.className = 'shopping-green';
                                mouseup(this, 'icons/' + this.className + '/' + this.className + '.svg',
                                    'icons/' + this.className + '/' + this.className + ' hover.svg');
                            };

        // Append img to cart node
        cartNode.appendChild(imgNode);

        // Append children to songNode
        songNode.appendChild(indexNode);
        songNode.appendChild(titleNode);
        songNode.appendChild(artistNode);
        songNode.appendChild(timeNode);
        songNode.appendChild(ratingNode);
        songNode.appendChild(priceNode);
        songNode.appendChild(cartNode);

        // Append songNode to songDiv
        songDiv.appendChild(songNode);
    }

}