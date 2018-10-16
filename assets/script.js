function sum_function() {
	var array = [3,7,'df',3,7,8,'df',23,6,2,67,'g',34,12,34,5];
	var total = 0;
	var s = 0;

	// start for loop
	for(var i = 0; i < array.length; i++) {
		//the isNaN() function determines whether a value is an illegal number.
		if (isNaN(array[i])) {

		} else {
			total += array[i];
			s++;
		}
	}

	var avg = total / s;
	var avg = avg.toFixed(7);

	document.getElementById("answer").innerHTML = "Average of the Array : " + avg;
	return true;
}

function reset_function() {
	document.getElementById("answer").innerHTML = "";
	return true;
}