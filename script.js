let lang=0;
		
		function changetext(){
		if(lang==0){
			document.querySelector("h1").textContent = "Wer das ließt kann lesen."; 
	    }else{
			document.querySelector("h1").textContent = "If you can read this you can read.";
		lang=0;
		}
	
		}
	