package com.example.delicatessen.Controllers;

import com.example.delicatessen.Models.Produce;
import com.example.delicatessen.Repositories.ProduceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProduceController {

    @Autowired
    ProduceRepository produceRepository;

    @GetMapping(value="/products")
    public ResponseEntity<List<Produce>> getAllProduce(){
        return new ResponseEntity<>(produceRepository.findAll(), HttpStatus.OK);
    }
    g
    @GetMapping(value ="/produce/type/{type}")
    public ResponseEntity getType (@PathVariable String type){
        return new ResponseEntity<>(produceRepository.findByType(type), HttpStatus.OK);
    }

    @GetMapping(value = "/produces/{id}")
    public ResponseEntity getProduce (@PathVariable Long id){
        return new ResponseEntity<>(produceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value ="/produces")
    public ResponseEntity<Produce> postProduce(@RequestBody Produce produce){
        produceRepository.save(produce);
        return new ResponseEntity<>(produce, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/produces/{id}")
    public ResponseEntity<Produce> updateProduce(@RequestBody Produce produce){
        produceRepository.save(produce);
        return new ResponseEntity<>(produce, HttpStatus.OK);
    }

    @DeleteMapping(value = "/produces/{id}")
    public ResponseEntity<Produce> deleteProduce(@PathVariable Long id){
        Produce found = produceRepository.getOne(id);
        produceRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}

