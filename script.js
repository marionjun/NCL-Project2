
const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
};

// first time
setClock();
// Update every 1000 ms
setInterval(setClock, 1000);


var currentDate  = new Date(),
    currentDay   = currentDate.getDate() < 10 
                 ? '0' + currentDate.getDate() 
                 : currentDate.getDate(),
    currentMonth = currentDate.getMonth() < 9 
                 ? '0' + (currentDate.getMonth() + 1) 
                 : (currentDate.getMonth() + 1);

document.getElementById("date").innerHTML = currentMonth + '.' + currentDay + '.' +  currentDate.getFullYear();


function monday() {
   document.getElementById("clock").style.backgroundImage = "url(https://raw.githubusercontent.com/marionjun/hobby-icons/main/monday.png)";
}
function tuesday() {
   document.getElementById("clock").style.backgroundImage = "url(https://raw.githubusercontent.com/marionjun/hobby-icons/main/tuesday.png)";
}
function wednesday() {
   document.getElementById("clock").style.backgroundImage = "url(https://raw.githubusercontent.com/marionjun/hobby-icons/main/wednesday.png)";
}
function thursday() {
   document.getElementById("clock").style.backgroundImage = "url(https://raw.githubusercontent.com/marionjun/hobby-icons/main/thursday.png)";
}
function friday() {
   document.getElementById("clock").style.backgroundImage = "url(https://raw.githubusercontent.com/marionjun/hobby-icons/main/friday.png)";
}
function saturday() {
   document.getElementById("clock").style.backgroundImage = "url(https://raw.githubusercontent.com/marionjun/hobby-icons/main/saturday.png)";
}
function sunday() {
   document.getElementById("clock").style.backgroundImage = "url(https://raw.githubusercontent.com/marionjun/hobby-icons/main/sunday.png)";
}


