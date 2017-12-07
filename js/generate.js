$(document).ready( function() {
	$('.device').click(part2);
	$('#enter').click(part3);
	$('#share').click(part4);

	$("#credits").keypress(function (e) {
	 //if the letter is not digit then display error and don't type anything
	 if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
	    //display error message
	    $("#errmsg").html("Digits Only").show().fadeOut(2000);
	           return false;
	 }
	});

});



function part2() {
	$('#part1').animate( {opacity: 0} , 600 , function() {
		$('#part1').css( {display: 'none'} );
		$('#part2').css( {display: 'block'} );
		$('#part2').animate( {opacity: 1} , 600 );
	})
}

function part3() {
	if( $('#credits').val() != '' && $('#name') != '' ){
		credits = $('#credits').val();
		name = $('#name').val();
		$('#part2').animate( {opacity: 0} , 600 , function() {
			$('#part2').css( {display: 'none'} );
			$('#part3').css( {display: 'block'} );
			$('#part3').animate( {opacity: 1} , 600 );
		})
	} else {
		if( $('#credits').val() == '' ){
			$("#errmsg").html("Please Enter How Many Credits You Want").show().fadeOut(2000);
		} 
		if( $('#name').val() == '' ){
			$('#errmsg1').html("Please Enter Your WWE Supercard Username").show().fadeOut(2000);
		}
	}
}

function part4() {
	$('#part3').animate( {opacity: 0} , 600 , function() {
		$('#part3').css( {display: 'none'} );
		$('#part4').css( {display: 'block'} );
		$('#part4').animate( {opacity: 1} , 600 );
		statusArray = [ "Connecting to Device" , "Device Connected" , "Connecting to Server" , "Requesting Server" ,  "Connected to Server" , "Requesting " + name , "Creating packets for " + credits + " Credits" , "Sending Packets" , "Adding Credits to " + name , "Credits Successfully Added" , "Disconnecting From Server" , "Disconnected" , "ERROR: HUMAN VERIFCATION REQUIRED!" ];
		$('#loadingcover').animate({width:'100%'}, (statusArray.length - 1 ) * 2000 );
		j = -1;
		progress();
	})
}

function progress() {
	setTimeout( function() {
		j++;
		$('#status').html(statusArray[j])
		if ( j < statusArray.length ) {
			progress();
		} else {
			popup();
		} 
	}, 2000);
}

function popup() {
	$('#part5bg').css({display: 'block'});
	$('#part5bg').animate({opacity:1} , 600 );
}