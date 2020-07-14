package Components;

import Repositories.CustomerRepository;
import Repositories.OrderRepository;
import Repositories.ProduceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProduceRepository produceRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){


    }
}
