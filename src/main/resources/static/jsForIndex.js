let tickets = [];
let allfilled = false;
let chooseFilled = false;
let amountFilled = false;
let fNameFilled = false;
let lNameFilled = false;
let telFilled = false;
let emailFilled = false;

let innChoose;
let innAmount;
let innfName;
let innlName;
let innTel;
let innEmail;
function validateFields(){
    innChoose = document.getElementById("choose").value;
    innAmount = document.getElementById("amount").value;
    innfName = document.getElementById("fName").value;
    innlName = document.getElementById("lName").value;
    innTel = document.getElementById("tel").value;
    innEmail = document.getElementById("email").value;

    if (innChoose === "") {
        document.getElementById("chooseError").innerHTML = "<span style='color: red'>" + 'Choose a movie' + "</span>";
        innChoose = "";
        document.getElementById("choose").value = "";
    }
    else {
        chooseFilled = true;
        document.getElementById("chooseError").innerHTML = "";
    }

    if (isNaN(innAmount) || innAmount === '') {
        document.getElementById("amountError").innerHTML = "<span style='color: red'>" + 'Plese write the amount of tickets' + "</span>";
        innAmount = "";
        document.getElementById("amount").value = "";
    }
    else {
        innAmount = document.getElementById("amount").value;
        amountFilled = true;
        document.getElementById("amountError").innerHTML = "";
    }

    if (innfName === '' || !isNaN(innfName)) {
        document.getElementById("fNameError").innerHTML = "<span style='color: red'>" + 'Please enter your firstname' + "</span>";
        innfName = "";
        document.getElementById("fName").value = "";
    }
    else {
        innfName = document.getElementById("fName").value;
        fNameFilled = true;
        document.getElementById("fNameError").innerHTML = "";
    }

    if (innlName === '' || !isNaN(innlName)) {
        document.getElementById("lNameError").innerHTML = "<span style='color: red'>" + 'Please enter your lastname' + "</span>";
        innlName = "";
        document.getElementById("lName").value = "";
    }
    else {
        innlName = document.getElementById("lName").value;
        lNameFilled = true;
        document.getElementById("lNameError").innerHTML = "";
    }

    if (innTel === '' || !document.getElementById("tel").value.match(/^[0-9]{4,13}$/)) {
        document.getElementById("telError").innerHTML = "<span style='color: red'>" + 'Please enter a valid phone number' + "</span>";
        innTel = "";
        document.getElementById("tel").value = "";
    }
    else {
        innTel = document.getElementById("tel").value;
        telFilled = true;
        document.getElementById("telError").innerHTML = "";
    }

    if (innEmail === '' || !document.getElementById("email").value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.getElementById("emailError").innerHTML = "<span style='color: red'>" + 'Please enter a valid email adress' + "</span>";
        innEmail = "";
        document.getElementById("email").value = "";
    }
    else {
        innEmail = document.getElementById("email").value;
        emailFilled = true;
        document.getElementById("emailError").innerHTML = "";
    }

    if (chooseFilled && amountFilled && fNameFilled && lNameFilled && telFilled && emailFilled) {
        allfilled = true;
    }
}

let purchasedTicket;
console.log(purchasedTicket);
function buyTicket() {
    validateFields();
    if (allfilled) {
        purchasedTicket = {
            choose : innChoose,
            amount : innAmount,
            fname : innfName,
            lname : innlName,
            tel : innTel,
            email : innEmail
        }

        $.post("/save", purchasedTicket, function(){
            getAll();
        });
        document.getElementById("choose").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("email").value = "";

        chooseFilled = false;
        amountFilled = false;
        fNameFilled = false;
        lNameFilled = false;
        telFilled = false;
        emailFilled = false;
        allfilled = false;
        console.log(purchasedTicket);
    }
}
function getAll() {
    $.get( "/getAll", function( data ) {
        printTickets(data);
    });
}
function printTickets(tickets){
    let out = "<table><tr>" +
        "<th>Movie</th><th>Amount</th><th>Firstname</th><th>Lastname</th><th>Tel</th><th>Email</th>" +
        "</tr>";

    for (let i=0; i<tickets.length; i++) {
        out += "<tr>";
        out += "<td>"+tickets[i].choose+"</td><td>"+tickets[i].amount+"</td><td>"+tickets[i].fname+"</td><td>"+tickets[i].lname+"</td><td>"+tickets[i].tel+"</td><td>"+tickets[i].email+"</td>";
        out += "</tr>";
    }
    document.getElementById("arrayField").innerHTML = out;
}
allfilled = false;

function deleteTickets() {
    tickets = [];
    function slettKundene() {
        $.get( "/deleteAll", function() {
            getAll();
        });
    }
    slettKundene();
    document.getElementById("arrayField").innerHTML = "";
    console.log(purchasedTicket);
}