function color(c) {

	var namedoc = $("#namesvg")[0].contentDocument; 	
	var desigdoc = $("#designationsvg")[0].contentDocument;  	
	var cnamedoc = $("#cnamesvg")[0].contentDocument;  	
	var contactdoc = $("#contactsvg")[0].contentDocument;  	
	var emaildoc = $("#emailsvg")[0].contentDocument;  	

	var nameID = namedoc.getElementById("name");    
	var desigID = desigdoc.getElementById("designation");    
	var cnameID = cnamedoc.getElementById("cname");    
	var contactID = contactdoc.getElementById("contact");    
	var emailID = emaildoc.getElementById("email");    


	switch (c) {
    case 1:
		nameID.style.fill="#000";
	break;

    case 2:
		nameID.style.fill="#FFF";
    break;

    case 3:
		desigID.style.fill="#000";
    break;

    case 4:
		desigID.style.fill="#FFF";
    break;

    case 5:
		cnameID.style.fill="#000";
    break;

    case 6:
		cnameID.style.fill="#FFF";
    break;

    case 7:
		contactID.style.fill="#000";
    break;

    case 8:
		contactID.style.fill="#FFF";
    break;

    case 9:
		emailID.style.fill="#000";
    break;

    case 10:
		emailID.style.fill="#FFF";
    break;
    
	}

}

function font(f) {

	var namedoc = $("#namesvg")[0].contentDocument; 	
	var desigdoc = $("#designationsvg")[0].contentDocument;  	
	var cnamedoc = $("#cnamesvg")[0].contentDocument;  	
	var contactdoc = $("#contactsvg")[0].contentDocument;  	
	var emaildoc = $("#emailsvg")[0].contentDocument;  	

	var nameID = namedoc.getElementById("name");    
	var desigID = desigdoc.getElementById("designation");    
	var cnameID = cnamedoc.getElementById("cname");    
	var contactID = contactdoc.getElementById("contact");    
	var emailID = emaildoc.getElementById("email");    


	switch (f) {
    case 1:
		nameID.style.fontFamily="AdventPro";
		desigID.style.fontFamily="AdventPro";
		cnameID.style.fontFamily="AdventPro";
		contactID.style.fontFamily="AdventPro";
		emailID.style.fontFamily="AdventPro";
	break;

    case 2:
		nameID.style.fontFamily="Amarante";
		desigID.style.fontFamily="Amarante";
		cnameID.style.fontFamily="Amarante";
		contactID.style.fontFamily="Amarante";
		emailID.style.fontFamily="Amarante";
	break;

    case 3:
		nameID.style.fontFamily="Antonio";
		desigID.style.fontFamily="Antonio";
		cnameID.style.fontFamily="Antonio";
		contactID.style.fontFamily="Antonio";
		emailID.style.fontFamily="Antonio";
    break;

    case 4:
		nameID.style.fontFamily="Comfortaa";
		desigID.style.fontFamily="Comfortaa";
		cnameID.style.fontFamily="Comfortaa";
		contactID.style.fontFamily="Comfortaa";
		emailID.style.fontFamily="Comfortaa";
    break;

    case 5:
		nameID.style.fontFamily="TwCen";
		desigID.style.fontFamily="TwCen";
		cnameID.style.fontFamily="TwCen";
		contactID.style.fontFamily="TwCen";
		emailID.style.fontFamily="TwCen";
    break;

    
	}

}

