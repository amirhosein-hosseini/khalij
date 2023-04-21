
function disableMouseScroll() {
    return false;
}
const navshow = () =>{
    document.getElementById("nav-list").classList.add("show")
    document.getElementById("nav-overlay").classList.add("active")
    document.body.style = "visibility:visable;height:100vh;width:100vw;overflow:hidden"
}
const navclose = () =>{
    document.getElementById("nav-list").classList.remove("show")
    document.getElementById("nav-overlay").classList.remove("active")
    document.body.style = "visibility:visable;height:initial;width:100%;overflow-x:hidden"
}
const menuitem = (name) =>{
    document.getElementById("menu-item-wrapper").innerHTML = name;
    document.getElementById("menu-item-wrapper").style.color = "#66fcf1"
}
const menuitemleave = () =>{
    document.getElementById("menu-item-wrapper").style.color = "#0b0c10"
    document.getElementById("menu-item-wrapper").innerHTML = "aaaa"
}
const servicesshow = () =>{
    document.getElementById("about-item-show").classList.add("showservices");
}
const servicesclose = () =>{
    document.getElementById("about-item-show").classList.remove("showservices");
}
var productrange = 8;
const productadd = () =>{
    const oldvalue = parseInt(document.getElementById("product-number").innerHTML);
    const newvalue = oldvalue + 1;
    if (newvalue > productrange){
        newvalue = oldvalue;
    }
    document.getElementById("product-number").innerHTML = newvalue; 
    document.getElementById("counterinput").value = newvalue;
}
const productremove = () =>{
    const oldvalue = parseInt(document.getElementById("product-number").innerHTML);
    const newvalue = oldvalue - 1;
    if (newvalue < 0){
        newvalue = oldvalue;
    }
    document.getElementById("product-number").innerHTML = newvalue; 
    document.getElementById("counterinput").value = newvalue;
}
const smallimage = (small) =>{
    document.getElementById("big-image").src = small.src;
}
const activelogin = () =>{
    document.getElementById("login-article").classList.remove("login-none")
}
const deactivelogin = () =>{
    document.getElementById("login-article").classList.add("login-none")
}
const signupshow = () =>{
    document.getElementById("login-article").classList.add("login-none");
    document.getElementById("sign-up-article").classList.remove("sign-up-none");
}
const loginshow = () =>{
    document.getElementById("sign-up-article").classList.add("sign-up-none");
    document.getElementById("login-article").classList.remove("login-none");
}
const showpassword = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}