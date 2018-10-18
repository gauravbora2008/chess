// Empty boxes have no-piece. boxes with pieces in it 
// has name of piece in the class name

var box = document.getElementsByClassName("box");


// add event listener to all boxes through a for loop
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener("click", selectBoxClick);
}

// adding objects for all chess pieces
// how?
// every piece will have name, location on board
// in terms of box_ID, alive (true false) selectedForMove
// methods for moving piece and and updating the board
// details to be decided yet

// var Piece = function(name, box_ID, alive) selectedForMove legalMoves {
// Piece(pawn, 8, alive);
// }


// callback function for checking if a box has piece or is empty
// and also get which piece is there in the box if present
function selectBoxClick() {
    if (nameOfPiece(this.id) === "white-pawn") {
        var nextMoveBoxID = parseInt(this.id.split("-").pop()) + 8;
        var possiblePawnMoveDestination = document.getElementById("boxID-" + nextMoveBoxID);
        console.log("can move to " + possiblePawnMoveDestination.id)
        possiblePawnMoveDestination.addEventListener("click", movePawn);
    }

    function movePawn() {
        // console.log(nameOfPiece + " is moved from " srcBoxID + " to " + destBoxID);
        console.log(this.classList);

        this.classList.remove("white-pawn");
        this.classList.add('no-piece');
        possiblePawnMoveDestination.classList.add('white-pawn');
        possiblePawnMoveDestination.classList.remove('no-piece');
        this.removeEventListener("click", movePawn);
    }
}

// checks if box ID has a piece or not. returns true or false
function hasPiece(boxID) {
    var el = document.querySelector("#" + boxID);

    if (el.classList.contains("no-piece")) {
        return false;
    } else {
        return true;
    }
}

// pass elem's ID into this; returns name of piece if there is a piece in box
function nameOfPiece(boxID) {
    var el = document.querySelector("#" + boxID);

    if (hasPiece(boxID)) {
        return el.className.split(" ").pop();
    } else return null;
}

making 

// pawn move

// capture source and destination box ids
// saveLastClicked and if nextClicked === lastClickID + 8?
// then remove nameOfPiece from boxID-n and add nameOfPiece to boxID-n+8