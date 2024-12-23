 const Colours = {
	"Amount" : 7,
	"Palletes" : [
		{
			"Name" : "Daylight",
			"Main": "#e1c7a5",
			"Light": "#d3e3e2",
			"Dark" : "#eab875",
			"Contrast" : "#7bc5c1"
		},
		{
			"Name" : "Twilight",
			"Main": "#fcaa82",
			"Light": "#73a2ac",
			"Dark" : "#0b5d69",
			"Contrast" : "#ff8d70"
		},
		{
			"Name" : "Midnight",
			"Main" : "#58626e",
			"Light" : "#9db3be",
			"Dark" : "#314657",
			"Contrast" : "#cca152",
		},
		{
			"Name" : "Lagoon",
			"Main" : "#24afc1",
			"Light" : "#f8f8f8",
			"Dark" : "#1795a8",
			"Contrast" : "#fccf47",
		},
		{
			"Name" : "Ocean",
			"Main" : "#189ab4",
			"Light" : "#d4f2f4",
			"Dark" : "#04445f",
			"Contrast" : "#74e7da",
		},
		{
			"Name" : "Reef",
			"Main" : "#1fbabf",
			"Light" : "#60d3aa",
			"Dark" : "#0b759d",
			"Contrast" : "#9cee8c",
		},
		{
			"Name" : "Island",
			"Main" : "#0ab68b",
			"Light" : "#92de8b",
			"Dark" : "#028174",
			"Contrast" : "#ffe3b3",
		},
	]
}

let Numbers = []

function ChangeColour() {
	let colour = localStorage.getItem("Colour")
	if (!colour) {
		colour = 3
	} else if (colour >= Colours["Amount"]) {
		colour = 3
	}
	document.documentElement.style.setProperty('--main', Colours["Palletes"][colour]["Main"]);
	document.documentElement.style.setProperty('--light', Colours["Palletes"][colour]["Light"]);
	document.documentElement.style.setProperty('--dark', Colours["Palletes"][colour]["Dark"]);
	document.documentElement.style.setProperty('--contrast', Colours["Palletes"][colour]["Contrast"]);
    var background = Colours["Palletes"][colour]["Light"]
    document.body.style.backgroundColor = background
}

function Submit() {
    localStorage.setItem("Colour", Color.value)
    ChangeColour()
}

function RandInt(max) {
  return Math.floor(Math.random() * max);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function IdGet(Id) {
    return document.getElementById(Id)
}

function Start() {
    ChangeColour()
    var arr = [];
    while(arr.length < 25){
    	var r = Math.floor(Math.random() * 100) + 1;
    	if(arr.indexOf(r) === -1) arr.push(r);
    }
    for (let a = 1; a < 26; a++) {
        let number = arr[a-1]
        let cell = IdGet(a)
        cell.textContent = number
        const ID = cell.id
        cell.onclick = function() { toggle(ID) }
        Numbers.push(number)
    }
}

function toggle(id) {
    IdGet(id).classList.toggle("active")
}

function Roll() {
    var Final = RandInt(100) + 1
    var b = 0
    var length = Numbers.length
    if (!length) {
        Length = 0
    }
    while (b != length) {
        if (Final == Numbers[b]) {
            Roll()
        }
        b++
    }
    return Final
}

Start()
