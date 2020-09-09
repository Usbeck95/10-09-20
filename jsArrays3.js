// kunne ikke få den her til at virke
n = Number(prompt('Hvor mange sider skal terningen have?'));

let count = [0,0,0,0,0,0,0];

function rolldice() {
    return Math.floor(Math.random() * n);
}

var results = [];

for (var i = 0; i < 6; i++) {
    var results = rolldice();
    count[results] = count[results] + 1;
    console.log(results);
}
/*
function isSame (results) {
    for (var i = 0; i < results.length; i++) {
        if (results[i] !== results[i]) {
            return false;
        }
    }
    return true;
}
*/
function isSame (results) {
    for (var i = 0; i < results.length; i++) {
        for (var j = 0; j < results; j++) {
            if (results[i] === results[j] && i != j) {
                return true;
            }
        }
    }
    return false;
}

console.log(isSame(results))