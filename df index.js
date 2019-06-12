function loadCarousel(index, playlist) {
    var songDiv = document.getElementsByClassName("shaddow-box-c")[index];

    // Create Image Share Div
    var imageShareDiv = document.createElement("div");
    imageShareDiv.className = "image-share";

    // Create Share Image (img) with event listeners
    var shareImage = document.createElement("img");
    shareImage.src = "icons/share/Share icon.svg";
    shareImage.onmouseover = function(){
        mouseover(this,'icons/share/Share icon hover.svg');
    };
    shareImage.onmouseout = function(){
        mouseout(this,'icons/share/Share icon.svg');
    };
    shareImage.onclick = function(){
        event.stopPropagation();
        showModal();
    };

    // Append to Image Shre Div
    imageShareDiv.appendChild(shareImage);
    songDiv.appendChild(imageShareDiv);

    // Create Carousel Title Div
    var carouselTitle = document.createElement("div");
    carouselTitle.className = "carousel-title";

    if (index == 0) {
        // Create Friends Icon (img)
        var friendsIcon = document.createElement("img");
        friendsIcon.src = "icons/friends.png";
        friendsIcon.style.height = "45px;";
        friendsIcon.style.width = "45px;";
        carouselTitle.appendChild(friendsIcon);

        var textNode = document.createTextNode("Check-out Justin Ramsey's New Playlist");
        carouselTitle.appendChild(textNode);

        songDiv.appendChild(carouselTitle);

    }
    else if (index == 1) {
        var textNode = document.createTextNode("Spanish Pop");
        carouselTitle.appendChild(textNode);

        songDiv.appendChild(carouselTitle);
    }

    var i;
    for (i = 0; i < playlist.songs.length; i++) {

        var songNode = document.createElement("div");
        songNode.className = "album-c";
        
        var albumImage = document.createElement("img");
        albumImage.src = playlist.songs[i].source;
        songNode.appendChild(albumImage);

        var title = document.createElement("div");
        textNode = document.createTextNode(playlist.songs[i].title);
        title.appendChild(textNode);
        songNode.appendChild(title);

        var artist = document.createElement("div");
        textNode = document.createTextNode(playlist.songs[i].artist);
        artist.appendChild(textNode);
        songNode.appendChild(artist);

        var price = document.createElement("div");
        textNode = document.createTextNode(playlist.songs[i].price);
        price.appendChild(textNode);
        songNode.appendChild(price);

        songDiv.appendChild(songNode);

    }

}