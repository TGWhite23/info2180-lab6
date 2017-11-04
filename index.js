// JavaScript File
 function searchButton() { 
 var inpuText = document.getElementById('searchWord').value;  
               var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
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
 
