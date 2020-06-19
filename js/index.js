window.onload = function()
{
    let statusstore = document.getElementById(2);

    statusstore.style.display = "none";
}


function pagechange()
{
    
    let statusHome = document.getElementById(1);
    let statusstore = document.getElementById(2);

    if( statusHome.classList.contains("active"))
    {
        statusHome.classList.remove("active");
        statusHome.classList.add("deactive");

        setTimeout( function(){ statusHome.style.display = 'none'}, 501);

        setTimeout( function() {
            statusstore.style.display = "block"

            statusstore.classList.remove("deactive")
            statusstore.classList.add("active");
        }, 502);
    }

    else if( statusstore.classList.contains("active"))
    {
        statusstore.classList.remove("active");
        statusstore.classList.add("deactive");

        setTimeout( function(){ statusstore.style.display = 'none'}, 501);

        setTimeout( function() {
            statusHome.style.display = "block"

            statusHome.classList.remove("deactive")
            statusHome.classList.add("active");
        }, 502);
    }
}





// mudando a cor do botão 
function btnchange(n)
{
    let id = n;
    let btn = document.getElementById(id);

    if( btn.classList.contains("picked"))
    {
        btn.classList.remove("picked");
        btn.classList.add("unpicked");


        btn.style.color = "#ee6f57"
        btn.style.background = "white"
    }

    else
    {
        btn.classList.remove("unpicked");
        btn.classList.add("picked");

        btn.style.color = "white"
        btn.style.background = "#ee6f57"
    }
}