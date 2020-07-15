package com.example.delicatessen.Repositories;

import com.example.delicatessen.Models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
