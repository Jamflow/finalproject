/*Button for generator*/
var newTask = document.getElementById("newTask");
var taskButton = document.getElementById("taskButton");

/*Adds event listener for clicks upon task button and creates new tasks.*/
taskButton.addEventListener("click", function() {
    
/*Creates array for subjects and sets them to be randomly chosen.*/
var Subject = ["Balloon", "Juicy", "Mango", "Comic sans", "Cinnamon-roll", "Abominable", "Left", "Illiterate", "Degenerate", "Reese's Pieces", "Caillou", "Gilbert", "Skyline Bound and Ready", "Parmesean-Head", "Holy", "Great Scott", "Nokia", "Rafiki", "Motumbo", "What the", "Mama", "Papa", "Shaqtin' A Fool", "Nugget", "Raspberry", "Basic", "Starbucks-Drinkin'", "Purple", "Pixel Art", "Blackbear", "Cinco de Mayo", "See-Saw", "Hopscotch", "Hubba Bubba", "Optimus", "Prime", "Chained-Wallet", "Lightweight", "Top Ramen", "Dry Tofu", "Kimchi", "Meatball", "Spaghetti", "Tech Deck", "Cornucopia", "Adidas", "Dumb Dumb Bubble Gum", "Fast", "Yeeter-gang", "Boilerboise"];
var randSubject = Subject[Math.floor(Math.random()*Subject.length)];

/*Creates array for adverbs and sets them to be randomly chosen.*/
var Adverb = ["Flickin'","Rockyroad", "Diggin'", "Lovin'", "Grassy", "Lookin'", "Skinny", "Jigglin'", "Fruity", "Peanut-Butter", "Carrot-top-lookin'", "Poppin'", "Ticklin'", "Fuego", "Snail-legged", "Boiled Egg", "Squeezin'", "Saucin'", "Clappin'", "Flippin'", "Burnin'", "Lip Smackin'", "Flappin'", "Bubbly", "Crabby", "Scratchy", "Itc"];
var randAdverb = Adverb[Math.floor(Math.random()*Adverb.length)];

/*Creates array for nouns and sets them to be randomly chosen.*/
var Noun = ["Nut","Jellybean", "Plum", "Dumpster", "Fudge", "Fridge", "Poophead", "Frickle-Frackle", "Llama", "Catfish", "Boi", "Girl", "Jiggles","Bobblehead", "Cheeto-Puff", "Almanac", "Puffin", "Potato", "Buffalo", "Weeb", "Eggplant", "", "Tattle-tale", "Snitch", ];                                                               
var randNoun = Noun[Math.floor(Math.random()*Noun.length)];

/*Creates variable for the task div string that will be generated, incorporating Subject, Adverb, and Noun arrays.*/
var task = "<div>"+randSubject+" "+randAdverb+" "+randNoun+"</div>";

/*Adds randomized string to a newly generated div*/
newTask.innerHTML = newTask.innerHTML+task;

});