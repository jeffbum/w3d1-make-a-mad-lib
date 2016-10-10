// Intentially made global by leaving off var before variable (DONT DO OFTEN!)
log = console.log.bind(console);

var defaultName= 'Master'; //naming a variable (placeholder)//

function sayHello(name) //function uses CSS brackets. blue is variable name//
{
    if (name === undefined) {
        console.log('Hello,' + defaultName + '!');
    }
    else {
        console.log('Hello,' + name + '!')
    }
}
//code inside curly brackets only run when I tell it to run. Defined, not declared//
/*sayHello('Sally');
sayHello('Johnny');
sayHello('boo boo');*/

//console.log ('Hello');
//can only start a variable name with a letter, $, or _ (nothing else)
//number can be in a variable name, just NOT the beginning!!
var transportationName = 'Prius';
var transportationType = 'car';
var $cost = 'Too Much';
var _green = true;
var snake_case = true;
var thisIsAVariable = true;
//use camel case for nameing variable. underscores will be ruby writers
//can nam a variable this way as well below (var for browsers, let in const in node and react)
let thisBeTrue = true;
const theNeverChange = true;
//declare var before a function, then you can use it in and out. !Variable scope!
function testVariables () {
    var thisIsNotAvailableOutside = true;
    console.log(thisIsAVariable);
}

//console.log(thisIsNotAvailableOutside);
//LET WHEN INSIDE CURLY BRACKETS, DOES NOT SEEP OUT INTO GLOBAL. WILL GET ERROR
if (true === true) {
    let thisIsAvailableOutside = true;
}

//log (thisIsAvailableOutside);

const thisCannotChange = true;
//thisCannotChange = false;

var firstName ='Jeff'; //declaration (var) w/ a value (firstName='Jeff')//
//only declare the irst time we use it. From then on, don't need to declare//
firstName='Jozy'
//var lastName; //JS lets you run variables without values
//console.log(lastName);// <-- output at this point in the code

var thisIsUndefined = undefined;
var thisIsNull = null;
var thisIsBoolean = true;
var thisIsNumber = 12.34
var thisIsString = 'My favorite number is 3.14';
var thisIsExpression =(1 + 1 * 100 / 4 - 8);//value from formula will be inputted
//var thisIsInput = inputs.first_name;

var favoriteMovie = 'WestWorld';
var favoriteMovieDirector = 'J.J Abrams';
var favoriteMovieGenre = 'drama';
var favoriteMovieYear = (2016);
var famovirteMovieIsMovie = true;

//console.log (favoriteMovie, favoriteMovieDirector, favoriteMovieGenre, favoriteMovieYear, famovirteMovieIsMovie);

var verb = 'run';
var sentence = 'Flying by the tower. I ' + verb + ' to safety.'; //concatenation
//console.log(sentence);

var verb = 1;
var sentence = 12 + verb + 12;

//console.log(sentence)

var verb = 'run';
var sentence = `Flying by the tower. I ${verb} to safety.`; //string templating
//console.log(sentence);

var on = true;
var ternary = (on ? 'the light is on' : 'The light is off') //ternary = on or off switch (binary)//
console.log(ternary)
//semi-colons are not necessary if I want to//
