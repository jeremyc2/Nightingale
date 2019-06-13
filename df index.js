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

    if (playlist.fromFriend == true) {
        // Create Friends Icon (img)
        var friendsIcon = document.createElement("img");
        friendsIcon.src = "icons/friends.png";
        friendsIcon.style.height = "45px;";
        friendsIcon.style.width = "45px;";
        carouselTitle.appendChild(friendsIcon);

        var textNode = document.createTextNode(playlist.title);
        carouselTitle.appendChild(textNode);

        songDiv.appendChild(carouselTitle);

    }
    else {
        var textNode = document.createTextNode(playlist.title);
        carouselTitle.appendChild(textNode);

        songDiv.appendChild(carouselTitle);
    }

    var albumStrip = document.createElement("div");
    albumStrip.className = "album-strip";

    var i;
    for (i = 0; i < playlist.songs.length; i++) {

        var songNode = document.createElement("div");
        songNode.className = "album-c";
        var title = playlist.songs[i].title;
        songNode.title = title;
        songNode.onclick = function() {
            location.href = 'album-details.html?album=' + this.title;
        }
        
        var albumImageNode = document.createElement("img");
        albumImageNode.src = playlist.songs[i].source;
        songNode.appendChild(albumImageNode);

        var titleNode = document.createElement("div");
        textNode = document.createTextNode(title);
        titleNode.appendChild(textNode);
        songNode.appendChild(titleNode);

        var artistNode = document.createElement("div");
        textNode = document.createTextNode(playlist.songs[i].artist);
        artistNode.appendChild(textNode);
        songNode.appendChild(artistNode);

        var priceNode = document.createElement("div");
        textNode = document.createTextNode(playlist.songs[i].price);
        priceNode.appendChild(textNode);
        songNode.appendChild(priceNode);

        albumStrip.appendChild(songNode);

    }

    songDiv.appendChild(albumStrip);

}