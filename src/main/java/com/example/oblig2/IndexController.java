package com.example.oblig2;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController

public class IndexController {
    private final ArrayList<TicketPurchase> allTickets = new ArrayList<>();
    @PostMapping("/lagre")
    public void saveTicket(){
        allTickets.add(purchasedTicket);
    }
}
