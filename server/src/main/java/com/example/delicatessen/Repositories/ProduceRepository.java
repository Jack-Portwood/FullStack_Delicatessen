package com.example.delicatessen.Repositories;

import com.example.delicatessen.Models.Produce;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProduceRepository extends JpaRepository <Produce, Long> {

    List<Produce> findByType(String type);

}