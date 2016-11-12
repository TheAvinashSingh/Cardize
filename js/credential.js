function nameonsvg() {

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

 	var name =  document.getElementById('name').value;
 	var designation =  document.getElementById('desig').value;
 	var cname =  document.getElementById('comp_name').value;
 	var contact =  document.getElementById('contact').value;
 	var email =  document.getElementById('email').value;


		nameID.textContent = name;
		desigID.textContent = designation;
		cnameID.textContent = cname;
		contactID.textContent = contact;
		emailID.textContent = email;

}

