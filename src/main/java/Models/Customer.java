package Models;

import java.util.ArrayList;

public class Customer {

    private Long id;
    private String firstName;
    private String secondName;
    private ArrayList<Order>orders;

    public Customer(String firstName, String secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.orders = new ArrayList<>();
    }

    public Customer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public ArrayList<Order> getOrders() {
        return orders;
    }

    public void setOrders(ArrayList<Order> orders) {
        this.orders = orders;
    }
}
