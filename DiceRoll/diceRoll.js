
function diceRoll(sides = 6) {
    return Math.floor(Math.random()*sides)
}

// console.log(diceRoll(6));

module.exports = {
    diceRoll
}