package com.example.delicatessen.Repositories;

import com.example.delicatessen.Models.Produce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduceRepository extends JpaRepository <Produce, Long> {

}