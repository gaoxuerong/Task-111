
function printBeerSong(num){
    let printBeerSongs = ``;
    for(let i=num; i>0;i--){
        if((i>=2)&&(i<=99)){
            printBeerSongs +=  `${i} bottles of beer on the wall,${i} bottles of beer.
            Take one down and pass it around, ${i - 1} bottles of beer on the wall.`
        }else if(i===1){
            printBeerSongs += `1 bottle of beer on the wall, 1 bottle of beer.
            Take one down and pass it around, no more bottles of beer on the wall.`
        }else{
            printBeerSongs += `No more bottles of beer on the wall, no more bottles of beer.
            Go to the store and buy some more, 99 bottles of beer on the wall.`
        }
    }
    return printBeerSongs;
}
module.exports = printBeerSong;

