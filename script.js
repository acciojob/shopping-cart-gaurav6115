var itemInput = document.getElementById("item-name-input");
var priceInput = document.getElementById("item-price-input");
var btn = document.getElementById("add");
var alertxt = document.getElementById("alert-text");

var table = document.getElementById("table");
var total = document.getElementById("total");

let pricearr=[];
function addlist() {
    var item = itemInput.value;
    var price = priceInput.value;
    alertxt.innerHTML = "";
    let sum = 0;

    if(item !== '' &&  price !== "") {
        let row = document.createElement("tr");
        pricearr.push(parseInt(price));
        row.innerHTML = `<td>${item} </td> <td>${price} </td>`;
        table.append(row);

        for(let i = 0; i < pricearr.length; i++){
            sum += pricearr[i];
        }
        
        total.innerText = sum;

        itemInput.value = "";
        priceInput.value = "";
    }
    
    else {
        alertxt.innerHTML = "Invalid input should not be accepted.";
    }
}

btn.onclick = addlist;
