let items = [];

function AddItem(item, price){
    let newitem = {
        Item: item,
        Price: price
    };

    //quantity
    let quantity = prompt("How many would you like to purchase?",1);

    // change status
    document.querySelector(".status").innerText = `Added ${quantity} ${item}(s) to the cart.`;

    for(let i = 0; i < quantity; i++){
        items.push(newitem);

         //dom manipulation
        //. for class
        //# for id
        //h1 for element
        document.querySelector(".cart").innerHTML += `<li>${newitem.Item} $${newitem.Price}</li>`;
        // document.querySelector(".cart").innerText += `${newitem.Item} $${newitem.Price}\n`;

        let total = 0;
        items.forEach((i) => {
            total += i.Price;
        });

        document.querySelector(".total").innerText = total.toFixed(2);
        document.querySelector(".tax").innerText = (total * 0.06).toFixed(2);
        document.querySelector(".grandTotal").innerText = ((total * 0.06) + total).toFixed(2);
    

        // let currentTotal = Number(document.querySelector(".total").innerText);
        // document.querySelector(".total").innerText = (currentTotal + price).toFixed(2);
    }
}

function DisplayItems(){
    items.forEach((i) => {
        console.log(`Item: ${i.Item} Price: $${i.Price}`) //Backtick not single quotes
    });
}

function Total(){
    let total = 0;
    items.forEach((i) => {
        total += i.Price
    });

    //Tax
    let tax = total * 0.06;
    let grandTotal = total + tax;
    console.log(`Total = ${total.toFixed(2)}`);
    console.log(`Tax = ${tax.toFixed(2)}`);
    console.log(`Grand Total = ${grandTotal.toFixed(2)}`);

    document.querySelector(".cart").innerHTML = "";
    document.querySelector(".tax").innerHTML = "0.00";
    document.querySelector(".grandTotal").innerHTML = "0.00";
    document.querySelector(".total").innerText = "0.00";

    items = [];
    console.log("The cart has been cleared.");

    document.querySelector(".status").innerText = `Cart purchased for $${grandTotal.toFixed(2)}. Cart cleared.`


}