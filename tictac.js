guess=prompt("Enter  a no.");
no=4;
if(guess==no)
{alert("Congratulations you guessed right!");}
else 
while(guess!=no)
{
    if(guess>no)
    {
    guess=prompt("Too high! Try again.");
    if(guess==no){alert("Congratulations you guessed right!");}
    }
    else
    {
        guess=prompt("Too low. Try again.");
        if(guess==no){alert("Congratulations you guessed right!");}
    }
} 

$("div").css("background", "purple");
$(".highlight").css("width","200px")