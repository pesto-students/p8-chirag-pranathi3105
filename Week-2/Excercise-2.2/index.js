
//document.getElementsByClassName("box-container").addEventListener("mouseover", mouseover);
const el = document.getElementsByClassName("box-container");

el[0].addEventListener("mouseover", mouseover, true);
el[0].addEventListener("mouseout", mouseout, false);
function mouseover() {
    //this.alert("Hello");
    const div1 = document.querySelector(".div1");
    div1.style.transform = 'rotate(90deg)';
    div1.style.transformOrigin = '0 0';
    const div2 = document.querySelector(".div2");
    div2.style.transform = 'rotate(-90deg)';
    div2.style.transformOrigin = '100 0';
    const div3 = document.querySelector(".div3");
    div3.style.transform = 'rotate(-90deg)';
    div3.style.transformOrigin = '0 100';
    const div4 = document.querySelector(".div4");
    div4.style.transform = 'rotate(90deg)';
    div4.style.transformOrigin = '100 100';
    
};
function mouseout(){
    //this.alert("Hello");
    const div1 = document.querySelector(".div1");
    div1.style.transformOrigin = '0 0';
    div1.style.transform = 'rotate(0deg)';
    const div2 = document.querySelector(".div2");
    
    div2.style.transform = 'rotate(0deg)';
    div2.style.transformOrigin = '100 0';
    const div3 = document.querySelector(".div3");
    
    div3.style.transform = 'rotate(0deg)';
    div3.style.transformOrigin = '0 100';
    const div4 = document.querySelector(".div4");
    
    div4.style.transform = 'rotate(0deg)';
    div4.style.transformOrigin = '100 100';
    
};
        