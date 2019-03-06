"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var a = this;    
    var h2 = a.parentElement;                    
    var div = h2.nextElementSibling; 
    // toggle plus and minus image in h2 elements by adding or removing a class
    /*if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");	
    } else { 
        h2.setAttribute("class", "minus"); 
    }*/
    if(h2.className==="")
    {
    	h2.className="minus";
    }
    else
    {
    	h2.className="";
    }
    // toggle div visibility by adding or removing a class
    /*if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    }*/
    if(div.className==="")
    {
    	div.className="open";
    }
    else
    {
    	div.className="";
    }
};

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");
    // attach event handler for each h2 tag	    
    for (var i = 0; i < aElements.length; i++ ) {
    	aElements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    //h2Elements[0].firstChild.focus();       
};
