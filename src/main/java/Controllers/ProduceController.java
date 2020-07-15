package Controllers;

import Models.Produce;
import Repositories.ProduceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProduceController {

    @Autowired
    ProduceRepository produceRepository;

    @GetMapping(value="/products")
    public ResponseEntity<List<Produce>> getAllProduce(){
        return new ResponseEntity<>(produceRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/products/{id}")
    public ResponseEntity getProduce (@PathVariable Long id){
        return new ResponseEntity<>(produceRepository.findById(id), HttpStatus.OK);
    }


}

