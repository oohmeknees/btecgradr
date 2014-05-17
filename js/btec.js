var check=1;
function displayResult(grade, unit)
	{
		var total=parseInt($("#grade").text());
		if (isNaN(total)) {var total = 0};
		var total = total + grade;
		if (grade==0) {
			check=0;
		};
		$("#grade").text(total);
		var inputs = document.getElementsByName(unit);
		for(var i = 0; i < inputs.length; i++) {
		    inputs[i].disabled = true;
		};
		if (total>=0) {var final="NYA"};
		if (check==1) {
			if (total>=150) {var final="Pass"};
			if (total>=170) {var final="Merit"};
			if (total>=190) {var final="Distinction"};
			if (total>=200) {var final="Distinction*"};
		};
		$("#final").text(final);
	};
