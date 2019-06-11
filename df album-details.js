var numSongs = 9;

function loadSongs() {
    var songDiv = document.getElementsByName("grid-container-album-details");

    var i;
    for (i = 0; i < numSongs; i++) {

        var songNode = document.createElement("div");
        songNode.class = "song";
        
        // Create the contents of song node
        var indexNode = document.createElement("div");
        var titleNode = document.createElement("div");
        var artistNode = document.createElement("div");
        var timeNode = document.createElement("div");
        var ratingNode = document.createElement("div");
        var priceNode = document.createElement("div");        
        var cartNode = document.createElement("div");

        // Append img to cart node

        // Add class,src, and touch events to img

        // Append children to songNode
        songNode.appendChild()

        // Append songNode to songDiv
        songDiv.appendChild(songNode);
    }
}