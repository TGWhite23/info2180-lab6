// JavaScript File
 function searchButton() { 
 var inpuText = document.getElementById('searchWord').value;  
               var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let myDiv = document.getElementById('result');
		myDiv.innerHTML = this.responseText;	  
    }else
    {
     console.log(this)
    }
  };
  xhttp.open("GET", "request.php?q=" + inpuText, true);
  xhttp.send();
  
  
 
 }
 
 function getAllButton() { 
	
               var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
	  let myDiv = document.getElementById('result');
	let txt = this.responseText;
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(txt,"text/xml");
	var newList = document.createElement("ol");
	
	for(var i = 0; i < (xmlDoc.getElementsByTagName("definition")).length; i++)
	{	var newListing = document.createElement("li");
		var heading = document.createElement("h3");
		var headingText = document.createTextNode(xmlDoc.getElementsByTagName("definition")[i].getAttribute("name"));		
		heading.appendChild(headingText);
		var paragraph1 = document.createElement("p");
		var definitionText = document.createTextNode(xmlDoc.getElementsByTagName("definition")[i].childNodes[0].nodeValue);
		paragraph1.appendChild(definitionText);
		var paragraph2 = document.createElement("p");
		var authorText = document.createTextNode("-" + xmlDoc.getElementsByTagName("definition")[i].getAttribute("author"));
		paragraph2.appendChild(authorText);
		
		newListing.appendChild(heading);
		newListing.appendChild(paragraph1);
		newListing.appendChild(paragraph2);
		newList.appendChild(newListing);
	}
	
	
		myDiv.appendChild(newList);	
	
	 
    }else
    {
     console.log(this)
    }
  };
  xhttp.open("GET","request.php?all=true"  , true);
  xhttp.send();
  
  
 
 }
 


 
 
