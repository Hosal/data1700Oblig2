package com.example.oblig2;

import java.util.ArrayList;

class TicketPurchase {
    private String choose;
    private String amount;
    private String fName;
    private String lName;
    private String tel;
    private String email;

    public TicketPurchase (String choose, String amount, String fName, String lName, String tel, String email){
        this.choose = choose;
        this.amount= amount;
        this.fName = fName;
        this.lName = lName;
        this.tel = tel;
        this.email = email;
    }
}

public class ArrayClassThing {
    public static void main(String[] args) {
        ArrayList<TicketPurchase> boughtTicket = new ArrayList<>();

    }
}
