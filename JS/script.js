 const plusSign = document.getElementsByClassName("plus");
 const minusSign = document.getElementsByClassName("minus");
 const h2 = document.getElementsByClassName("para");

 function deploy() {
    if(this.className != "para"){
        this.setAttribute("hidden", "true");
    }else {
        this.eventListener("click", "shrink");
    }

    parent = this.parentElement;
    childrens = parent.children;
    child_1 = childrens[1];
    child_2 = childrens[2];
    child_3 = childrens[3];
    child_1.setAttribute("hidden","true");
    child_2.removeAttribute("hidden");
    child_3.removeAttribute("hidden");
   
}
function shrink() {
    if (this.className != "h2") {
        this.setAttribute("hidden","true");
    }
    else {
        this.removeEventListener("click",shrink)
        this.addEventListener("click",deploy)
    }
    parent = this.parentElement;
    childrens = parent.children;
    child_1 = childrens[1];
    child_2 = childrens[2];
    child_3 = childrens[3];
    child_1.removeAttribute("hidden");
    child_2.setAttribute("hidden","true");
    child_3.setAttribute("hidden","true");
   
}
for (var i = 0 ;i < plusSign.length; i++ ) {
    plusSign[i].addEventListener("click",deploy); 
    minusSign[i].addEventListener("click",shrink);
    h2[i].addEventListener("click",deploy);
}

