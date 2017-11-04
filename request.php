<?php

// accept a term (keyword)
// respond with a value





$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];

if (isset($_GET['q'])){
	$query = $_GET['q'];
	print "<h3>" . strtoupper($query) . "</h3>";
	print "<p>" . $definition[$query] . "</p>";
}

if (isset ($_GET['all'])){
	$txt = '<?xml version="1.0" encoding="UTF-8"?> 
<entries> 
    <definition name="definition" author="John"> 
        a statement of the exact meaning of a word, especially in a 
dictionary. 
</definition> 
    <definition name="bar" author="Mary"> 
        a place that sells alcholic beverages 
</definition> 
    <definition name="ajax" author="Kimberly"> 
        technique which involves the use of javascript and xml 
</definition> 
	<definition name = "html" author = "Bill">
			The standard markup language for creating web pages and web applications.
</definition>
	<definition name="css" author="Jill">
		A style sheet language used for describing the presentation of a document written in a markup language.
</definition>
	<definition name="javascript" author="Will">
		A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
</definition>
	<definition name="php" author="sam">
		A server-side scripting language, and a powerful tool for making dynamic and interactive websites.
</definition>	
</entries>';
	print $txt;
}
?>