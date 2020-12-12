function calculate() {
	var weight = Number(document.querySelector('#weight').value)
	var activity = document.querySelector('#activity').value
	var minutes = Number(document.querySelector('#minutes').value)
	var cals = 0

	if (weight == 120 && activity == "running") {
		cals = 11.4 * minutes
	} else if (weight == 140 && activity == "running") {
		cals = 13.2 * minutes
	} else if (weight == 160 && activity == "running") {
		cals = 15.1 * minutes
	} else {
		cals = 17 * minutes
	}

	calsStr = cals.toString()
	document.getElementById("output").innerHTML = "You burned " + calsStr + " calories."
}











