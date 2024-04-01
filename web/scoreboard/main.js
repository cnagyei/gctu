let score = 0;

function increase(score)
{
    let score = 0;
    score += 1;
    alert(score);
}

function decrease()
{
    score--;
    document.write(score);
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#but1").onclick = increase;
});