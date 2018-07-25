$( document ).ready(function() {
	
	
	console.log("Hi im here");
	
	$( "button" ).click(function() {
       	console.log( "clicked" );
		
		var noun = $("#noun").val();
		var adjective = $("#adjective").val();
		var name = $("#name").val();		  
		var sentence1 = "There once was a " + noun; 
		var sentence2 = '  who really wanted to find a  ' + adjective; 
		 var sentence3 = ' human ' + name + '.'; 
		 console.log( sentence1)
		 console.log(noun);
		 console.log(adjective);
		 console.log(name);
		 
		 $("#result").html( "There once was a " + noun +'  who really wanted to find a  ' + adjective +' human ' + name + '!');
	
	
	
	

    }); 
	
	
	
	
	
	
	
});