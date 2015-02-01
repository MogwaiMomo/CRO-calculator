$(function(){


	// Get input values

	function getVals() {
		var aov = $(".js-aov").val();
		var aopp = $(".js-aopp").val();
		var arr = $(".js-arr").val();
		var gpm = $(".js-gpm").val();
		var ac = $(".js-ac").val();
		var ar = $(".js-ar").val();
		
		var raw_values = { 	
			'aov'	: aov, 
			'aopp'	: aopp, 
			'arr'	: arr, 
			'gpm'	: gpm,
			'ac'	: ac,
			'ar'	: ar
		};

		return raw_values;
		
	};

	// Scrub the data

	function scrubVals(raw_values) {

		var re = /(\d+.\d{2}|\d+)/ ; // match any integers or currency (decimal) numbers
		var clean = {} ;
		
		$.each(raw_values, function(i, val) {
			
			match = val.match(re)[0]; // get only the first match (regexp returns double)
			num = parseInt(match);
			clean[i] = num;
		});

		return clean;
	};


	// Calculate ROI & budget


	function calculate(clean) {

		lt_gross_rev = clean.aov * clean.aopp * clean.arr;
		lt_profit = lt_gross_rev * (clean.gpm / 100);

		annual_lt_gross_rev = lt_gross_rev * clean.ar;
		annual_lt_profit = lt_profit * clean.ar;
		
		profit_lift = (annual_lt_profit * 0.1);
		cro_budget = (profit_lift * 0.5);

		// convert to string for display:

		profit_as_str = profit_lift.toLocaleString();
		budget_as_str = cro_budget.toLocaleString();

		// diplay in HTML: 

		$('h3.js-profit').text("$" + profit_as_str);
		$('h3.js-budget').text("$" + budget_as_str);
	};


	// Set click listener to calculate-btn:

	$(".calculate-btn").click(function(){
		var values 	= getVals();
		var clean 	= scrubVals(values);
		
		//do the math & display: 
		calculate(clean);
	});

});






