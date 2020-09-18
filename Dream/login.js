alert("Page connected")
function validateemail()
   {
       var emailn=document.getElementById('exampleInputEmail1').value;
       var emailError=document.getElementById('emailError');
       var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if (regex.test(exampleInputEmail1))
       {
           emailError.innerHTML="<br><font color='yellow'size='4px'>Valid Email";
           return true;            
       }
       else
       {
           emailError.innerHTML="<br><font color='red'size='4px'>Invalid Email";
           return false;            
       }
   }   

function validatef()
   {
       if( validateemail())
       {
           alert("Logged In Successfully.");
           return true;
       }
       else
       {
           alert('Please Check for Invalid Entries.');
           return false;
       }
   }
