function accent(c) {

	var svgDoc1 = $("#cardheader")[0].contentDocument; 	
	var svgDoc2 = $("#cardfooter")[0].contentDocument;  	

	var svgItem1 = svgDoc1.getElementById("accent");    
	var svgItem2 = svgDoc2.getElementById("accent");    

	switch (c) {
    case 1:
		svgItem1.style.fill="#42a5f5";
		svgItem2.style.fill="#42a5f5";
	break;

    case 2:
		svgItem1.style.fill="#f44336";
		svgItem2.style.fill="#f44336";
    break;

    case 3:
		svgItem1.style.fill="#4caf50";
		svgItem2.style.fill="#4caf50";
    break;

    case 4:
		svgItem1.style.fill="#ffeb3b";
		svgItem2.style.fill="#ffeb3b";
    break;

    case 5:
		svgItem1.style.fill="#673ab7";
		svgItem2.style.fill="#673ab7";
    break;

    case 6:
		svgItem1.style.fill="#e91e63";
		svgItem2.style.fill="#e91e63";
    break;

    case 7:
		svgItem1.style.fill="#1a237e";
		svgItem2.style.fill="#1a237e";
    break;

    case 8:
		svgItem1.style.fill="#76ff03";
		svgItem2.style.fill="#76ff03";
    break;

    case 9:
		svgItem1.style.fill="#ff8f00";
		svgItem2.style.fill="#ff8f00";
    break;

}

}

