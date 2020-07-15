package com.example.delicatessen.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties(value ="orders")
    @ManyToOne
    @JoinColumn(name = "Customers")
    private Customer customer;

    @ManyToMany
    @JoinTable(
            name = "orders_products",
            joinColumns = {@JoinColumn(name="order_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "produce_id", nullable = false, updatable = false)}
    )
    private List<Produce> products;

    public Order(Customer customer) {
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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Produce> getProducts() {
        return products;
    }

    public void setProducts(List<Produce> products) {
        this.products = products;
    }
}
