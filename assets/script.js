function sum_function() {
	var array = [3,7,'df',3,7,8,'df',23,6,2,67,'g',34,12,34,5];
	var total = 0;
	var s = 0;

	for(var i = 0; i < array.length; i++) {
		//Checking if element is number or not.
		if (isNaN(array[i])) {

		} else {
			total += array[i];
			s++;
		}
	}

	var avg = total / s;
	document.getElementById("answer").innerHTML = "Average of the Array : " + avg;
	return true;
}

function reset_function() {
	document.getElementById("answer").innerHTML = "";
	return true;
}