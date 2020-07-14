package Models;

import java.util.ArrayList;

public class Order {

    private Long id;
    private String customer;
    private ArrayList<Produce>products;

    public Order(String customer) {
        this.customer = customer;
        this.products = new ArrayList<>();
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public ArrayList<Produce> getProducts() {
        return products;
    }

    public void setProducts(ArrayList<Produce> products) {
        this.products = products;
    }
}
