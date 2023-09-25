// clientHeight

function boxAppear(){
        let top = Math.floor(Math.random()* box.clientHeight );
        let left = Math.floor(Math.random()* box.clientWidth );

        document.getElementById("no").style.top = top >= box.clientHeight / 2 ? `${ top - no.clientHeight}px` : `${top}px`;
        document.getElementById("no").style.left = left >= box.clientWidth /2 ? `${ left - no.clientWidth}px` : `${left}px`;

}

document.getElementById("no").onclick = () =>{

    document.getElementById("no").style.position = "absolute"
    boxAppear();
}

document.getElementById("yes").onclick = () =>{
    document.getElementById("up").style.display = "none";
    document.getElementById("down").style.display = "none";

    document.getElementsByTagName("h2")[1].style.fontSize = "2.5rem";
    document.getElementsByTagName("h2")[1].innerHTML = "Yes, I Knew It!!! 🤣😂😅";
}
