package Controllers;

import Models.Produce;
import Repositories.ProduceRepository;
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

    @GetMapping(value = "/products/{id}")
    public ResponseEntity getProduce (@PathVariable Long id){
        return new ResponseEntity<>(produceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value ="/products")
    public ResponseEntity<Produce> postProduce(@RequestBody Produce produce){
        produceRepository.save(produce);
        return new ResponseEntity<>(produce, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/products/{id}")
    public ResponseEntity<Produce> updateProduce(@RequestBody Produce produce){
        produceRepository.save(produce);
        return new ResponseEntity<>(produce, HttpStatus.OK);
    }

    @DeleteMapping(value = "/products/{id}")
    public ResponseEntity<Produce> deleteProduce(@PathVariable Long id){
        Produce found = produceRepository.getOne(id);
        produceRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}

