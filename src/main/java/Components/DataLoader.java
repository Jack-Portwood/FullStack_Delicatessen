package Components;

import Models.Customer;
import Models.Produce;
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

        Customer customer1 = new Customer("Jack", "Portwood");
        customerRepository.save(customer1);

        Produce produce1 = new Produce("Blue Cheese","Stilton","Hebridean Blue","Scotland", "Scotland\'s take on a classic Stilton. Aged for 8 months this blue cheese made by the Reid family is a wonderfully subtle and creamy blue. Salty and tangy with a creamy texture. The Reid\'s herd is made up mostly of Friesian cows, with some Jersey, Ayrshire and Swiss Reds and are looked after by their son – Garth.", "https://mellischeese.net/wp-content/uploads/2017/10/IMG_9671.jpg", 10.00, 7.00  );
        produceRepository.save(produce1);

        Produce produce2 = new Produce("Blue Cheese", "Stilton", "Lanark Blue", "Scotland", "Lanark changes from season to season.  Early season cheese has along, lingering sweet flavour with a sharp undertone; late season cheese is punchier and more savoury. Lanark Blue and its creator – Selina Cairns are seen as pioneers of Scottish Artisan cheese.", "https://mellischeese.net/wp-content/uploads/2017/11/IMG_9708.jpg",10.00, 6.00);
        produceRepository.save(produce2);

        Produce produce3 = new Produce("Blue Cheese", "Gorgonzola", "Gorgonzola Dolce", "Italy", "Gorgonzola Dolce. A pasteurized cow\'s milk cheese made just outside Milan, Italy. This is probably one of the most recognized cheeses in the world. We sell the Dolce version made by Mario Costa near Lombardy. It\'s creamy and sweet in flavour with an oozy and soft texture. It\'s best served at room temperature with some nice honey and walnuts.", "https://mellischeese.net/wp-content/uploads/2020/05/IMG_1649__1589358301_92.207.104.30.jpg", 35.00,15.00);
        produceRepository.save(produce3);

        Produce produce4 = new Produce("Blue Cheese", "Fourme D\'Amert", "Fourme D\'Amert", "France", "Produced in the Auvergne region, Fourme d\'Ambert is one of France\'s oldest cheeses. Made with raw cow\'s milk. It\'s creamy, mellow and salty.","https://mellischeese.net/wp-content/uploads/2020/04/fourme-d-ambert-.jpg" ,10.00, 7.00);
        produceRepository.save(produce4);


    }
}
