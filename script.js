let firstChoice;
let walkToHouse;
let enterWoods;
let sneakPast;
let pickDoor;

function start(){

let name = prompt("Hello there! What is your name?");
firstChoice = prompt("Tough luck, " + name + ". While driving on a long journey through the Appalachian Mountains, you have ended up with a flat tire!  Unfortunately, you do not have a spare. It is the middle of the night, and the odds of someone passing in another vehicle seem low. You survey your surroundings and notice a house further down the road with a porch light on. Would you like to knock on the door to request to use their phone , or attempt to walk back to the last town you passed? (Walk/Knock)")

if(firstChoice === "knock"){
walkToHouse = prompt("Just as you are about to knock, the door swings open. There are no lights on inside.  It would be rude to just walk in, would you like to yell to see if anyone is home, or just barge in? (Yell/Barge)")
}
else if(firstChoice === "walk"){
enterWoods = prompt("You decide to backtrack on foot. It is windy and you start to shiver. Maybe it will be warmer in among the trees on the side of the road.  Would you like to enter the woods? (Woods/Nah)")
}

if(walkToHouse === "yell"){
	alert("A GIANT BEAR is startled awake by your greeting and EATS YOU. Rest in Peace, " + name)
}
else if(walkToHouse === "barge"){
pickDoor = prompt("It is lucky that you have no manners, because just inside the door, you see a giant bear fast asleep on a rug.  A yell might have startled it and who knows what could have happened! You continue on into the home in search of a phone.  You come upon a hall with three doors. Which door do you go through? (1/2/3) ")
}

if(enterWoods === "woods"){
alert("Impossibly, It is even colder among the trees. You freeze into a popsicle while wandering around. Rest in Peace " + name + '.')
}
else if(enterWoods === "nah"){
alert("Miraculously, a car pulls up beside you as you walk. Inside, there is an old woman with bright white hair.  She offers you warm cookies and a ride to the nearest town. All is well for you.")
}

if(pickDoor === "1"){
alert("You creep into the kitchen and stumble upon a WITCH stirring a giant pot. “Ah”, she says. “Please stay for dinner!”  She cooks you into a pie. Rest in Peace, " + name + ".")
}

else if(pickDoor=== "2"){
alert("In the basement, you find A GIANT MAN-EATING PLANT! “Feed me Seymour!”, it says just before it gobbles you up. Rest in Peace, " + name + ".")
}

else if(pickDoor=== "3"){
alert("You enter the hall to find a phone on the wall. You call AAA and you get the heck out of this weird house and on your way home. All is well for you.")
}

let startNew = confirm("Would you like to rethink?");
if(startNew == true){
	start();
}

}
start();

