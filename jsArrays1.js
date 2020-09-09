
let count = [0,0,0,0,0,0,0];

function rolldice() {
    return Math.floor(Math.random() * 6);
}

var results = [];

for (var i = 0; i < 6; i++) {
    var results = rolldice();
    count[results] = count[results] + 1;
    document.write(results);
}

