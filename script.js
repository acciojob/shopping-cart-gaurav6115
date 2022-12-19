//your code here
var items = document.getElementById("item-name-input");
var prices = document.getElementById("item-price-input");
var btn = document.getElementById("add");
var alertxt = document.getElementById("alert-text");

var table = document.getElementsByTagName("table");
var row = document.getElementById("row");
var heading = document.getElementById("total");

var total = heading.innerHTML;

function addlist() {
    var ivalue = items.value;
    var pvalue = prices.value;
    alertxt.innerHTML = "";
    total += pvalue;

    if (ivalue && pvalue != "") {


        var itemlist = document.createElement("td");
        itemlist.innerText = ivalue;
        console.log(itemlist);
        row.append(itemlist);

        var pricelist = document.createElement("td");
        pricelist.innerText = pvalue;
        console.log(pricelist);
        row.append(pricelist);


        items.value = "";
        prices.value = "";

    }


    else {
        alertxt.innerHTML = "Invalid input should not be accepted.";
    }
}

btn.onclick = addlist;
