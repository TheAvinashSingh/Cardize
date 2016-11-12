
	function generate(){
		drawCanvas0();
		drawCanvas1();
		drawCanvas2();
		drawCanvas3();
		drawCanvas4();
		drawCanvas5();
		drawCanvas6();
		drawCanvas7();
	}



	/*
	 * This draws different layers of Vcard on canvas
	 */
	 

	function drawCanvas0(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 500, 300);              // Clear so that changes in elements are deleted from canvas
		ctx.fillStyle = "#FFF";
		ctx.fillRect(0, 0, 500, 300);               // Rectangle to fix opacity issues



		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('cardbg').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,0,500,300); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}


	function drawCanvas1(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		
		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('cardheader').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,0,500,150); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}


	function drawCanvas2(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		
		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('cardfooter').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,130,500,170); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}
	
	function drawCanvas3(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		
		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('namesvg').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,0,500,25); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}

	function drawCanvas4(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		
		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('designationsvg').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,0,500,20); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}

	function drawCanvas5(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		
		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('cnamesvg').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,0,500,20); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}

	function drawCanvas6(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		
		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('contactsvg').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,0,500,10); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}

	function drawCanvas7(){
		// create a canvas and context
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		
		
		// define svgdocument and make blob containing its data
		var svgDoc = document.getElementById('emailsvg').getSVGDocument();
		var svg = new Blob([svgDoc.lastChild.outerHTML], {type: 'image/svg+xml;charset=utf-8'});
	
		// create a new image
		var DOMURL = window.URL || window.webkitURL || window;
		var url = DOMURL.createObjectURL(svg); 
		var img = new Image(); 
		img.onload = function(){ 
			ctx.drawImage(img,0,0,500,10); 
			DOMURL.revokeObjectURL(url);
		};
		img.src = url;
	}


	/*
	 * This saves the drawn canvas image for local download by calling the
	 * anchor that shows "download" dialog for the specified filename
	 */
	function saveImage(){
		var button = document.getElementById('btn-download');
		button.addEventListener('click', function (e) {
			var dataURL = document.getElementById('canvas').toDataURL('image/png');			
			button.href = dataURL;
		});
		button.click();
	}

