function myfun()
{
	document.getElementById("mydropdown").classList.toggle("show");
}
window.onclick = function(event) 
{
  if (!event.target.matches(".dropbtn"))
   {
   		var dropdowns=document.getElementById("mydropdown");
   		
   		
   			
      		if (dropdowns.classList.contains('show')) 
      		{
        		dropdowns.classList.remove('show');
      		}
    	
 	 }
}
   		