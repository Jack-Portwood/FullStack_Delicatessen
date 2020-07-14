package Repositories;

import Models.Produce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduceRepository extends JpaRepository <Produce, Long> {

}