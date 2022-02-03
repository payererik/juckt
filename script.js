let lang=0;
		
		function changetext(){
		if(lang==0){
		document.getElementById("xo").innerHTML="Wer das ließt kann lesen.";
		lang=1;
	    }else{
	    document.getElementById("xo").innerHTML="If you can read this you can read.";
		lang=0;
		}
	
		}
	