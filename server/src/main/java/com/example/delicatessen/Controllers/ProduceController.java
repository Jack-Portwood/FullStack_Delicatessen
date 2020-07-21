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

    @GetMapping(value="/produce")
    public ResponseEntity<List<Produce>> getAllProduce(){
        return new ResponseEntity<>(produceRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value ="/produce/type/{type}")
    public ResponseEntity<List<Produce>> getType(@PathVariable String type){
        return new ResponseEntity<>(produceRepository.findByType(type), HttpStatus.OK);
    }

    @GetMapping(value = "/produce/{id}")
    public ResponseEntity getProduce (@PathVariable Long id){
        return new ResponseEntity<>(produceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value ="/produce")
    public ResponseEntity<Produce> postProduce(@RequestBody Produce produce){
        produceRepository.save(produce);
        return new ResponseEntity<>(produce, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/produce/{id}")
    public ResponseEntity<Produce> updateProduce(@RequestBody Produce produce){
        produceRepository.save(produce);
        return new ResponseEntity<>(produce, HttpStatus.OK);
    }

    @DeleteMapping(value = "/produce/{id}")
    public ResponseEntity<Produce> deleteProduce(@PathVariable Long id){
        Produce found = produceRepository.getOne(id);
        produceRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}

