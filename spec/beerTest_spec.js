
const printBeerSong = require('../printBeerSong');
const beerSong = require('../beerSong');
let num =99;
describe("The beer song",function(){
    it("from 99 to 0",function(){
        expect(printBeerSong(num)).toEqual(beerSong());
    })
})