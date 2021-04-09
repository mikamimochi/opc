var Airtable = require("airtable");
const st = new String("Date Caught");

var base = new Airtable({ apiKey: "key8UAd6NowkxCVNQ" }).base(
  "appgMBPpWYyAz93QJ"
);

base("pokemon").select({}).eachPage(gotTypeOfFish, gotAllFish);

var fishes = [];

function gotTypeOfFish(records, fetchNextPage) {
  console.log("gotTypeOfFish()");
  // add the records from this page to our books array
  fishes.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllFish(err) {
  console.log("gotAllFish()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogFish();
  showFish();
}

function consoleLogFish() {
  console.log("consoleLogFish()");
  fishes.forEach((fish) => {
    console.log("Fish:", fish);
  });
}


function showFish() {
  console.log("showFish()");
  fishes.forEach((fish) => {

  	var fishContainer = document.createElement("div");
  	fishContainer.classList.add("fish-container");
  	document.querySelector(".container").append(fishContainer);



    var fishBall = document.createElement("img");
    fishBall.classList.add("fish-ball");
    fishBall.src = fish.fields.ball[0].url;
    fishContainer.append(fishBall);


    var fishName = document.createElement("p");
    fishName.classList.add("fish-name");
    fishName.innerText = fish.fields.Name;
    fishContainer.append(fishName);

    var fishCp = document.createElement("p");
    fishCp.classList.add("fish-cp");
    fishCp.innerText = fish.fields.CP;
    fishContainer.append(fishCp);

    var fishPlace = document.createElement("p");
    fishPlace.classList.add("fish-found");
    fishPlace.innerText = fish.fields.found;
    fishContainer.append(fishPlace);

    var fishTime = document.createElement("p");
    fishTime.classList.add("fish-time");
    fishTime.innerText = st;
    fishTime.innerText = fish.fields.time;
    fishContainer.append(fishTime);



    var fishImg = document.createElement("img");
    fishImg.classList.add("fish-img");
    fishImg.src = fish.fields.Snapshot[0].url;
    fishContainer.append(fishImg);



    fishContainer.addEventListener("click", function(){
    	fishName.classList.toggle("active");
    	fishBall.classList.toggle("active");
    	fishCp.classList.toggle("active");
    	fishImg.classList.toggle("active");
    	fishPlace.classList.toggle("active");
    	fishTime.classList.toggle("active");
    	fishContainer.classList.toggle("active");
    })
    
  })
}