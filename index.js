function game()
{
    var i = Math.floor(Math.random() * 6)+1;
    var j = Math.floor(Math.random() * 6)+1;
    document.querySelector(".img1").src="images/dice"+i+".png";
    document.querySelector(".img2").src="images/dice"+j+".png";
    if(i>j)
    {
        document.querySelector("h1").textContent="🚩 Player 1 Wins";
    }
    else if(i<j)
    {
        document.querySelector("h1").textContent="Player 2 Wins 🚩";
    }
    else
    {
        document.querySelector("h1").textContent="🚩 Its Draw ! 🚩"
    }
}