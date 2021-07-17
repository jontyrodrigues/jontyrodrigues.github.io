var vue = new Vue({

});

function change(){
    var url = new URL(document.location.href);
    var arr = Array.from(document.querySelector("body > div > nav > div.mainbar > ul").children);
    arr.forEach(element => {
        element.firstChild.removeAttribute("class");
    });
    document.getElementById(url.searchParams.get("data")).setAttribute("class","active");

}