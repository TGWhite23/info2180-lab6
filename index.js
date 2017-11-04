// JavaScript File
 function sayHello() {
  alert("Hey There");
               var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }else
    {
     console.log(this)
    }
  };
  xhttp.open("GET", "https://info2180-lab6-titaniagwhite.c9users.io/request.php?q=definition", true);
  xhttp.send();
    
 }
