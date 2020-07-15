package com.example.delicatessen.Components;

import com.example.delicatessen.Models.Customer;
import com.example.delicatessen.Models.Order;
import com.example.delicatessen.Models.Produce;
import com.example.delicatessen.Repositories.CustomerRepository;
import com.example.delicatessen.Repositories.OrderRepository;
import com.example.delicatessen.Repositories.ProduceRepository;
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

        Customer customer2 = new Customer("Abby", "Cooper");
        customerRepository.save(customer2);

        Produce produce1 = new Produce("Blue Cheese","Stilton","Hebridean Blue","Scotland", "Scotland\'s take on a classic Stilton. Aged for 8 months this blue cheese made by the Reid family is a wonderfully subtle and creamy blue. Salty and tangy with a creamy texture.", "https://mellischeese.net/wp-content/uploads/2017/10/IMG_9671.jpg", 10.00, 7.00  );
        produceRepository.save(produce1);

        Produce produce2 = new Produce("Blue Cheese", "Stilton", "Lanark Blue", "Scotland", "Lanark changes from season to season.  Early season cheese has along, lingering sweet flavour with a sharp undertone; late season cheese is punchier and more savoury.", "https://mellischeese.net/wp-content/uploads/2017/11/IMG_9708.jpg",10.00, 6.00);
        produceRepository.save(produce2);

        Produce produce3 = new Produce("Blue Cheese", "Gorgonzola", "Gorgonzola Dolce", "Italy", "A pasteurized cow\'s milk cheese made just outside Milan, Italy. One of the most recognized cheeses in the world. It\'s creamy and sweet in flavour with an oozy and soft texture. It\'s best served at room temperature with some nice honey and walnuts.", "https://mellischeese.net/wp-content/uploads/2020/05/IMG_1649__1589358301_92.207.104.30.jpg", 35.00,15.00);
        produceRepository.save(produce3);

        Produce produce4 = new Produce("Blue Cheese", "Fourme D\'Amert", "Fourme D\'Amert", "France", "Produced in the Auvergne region, Fourme d\'Ambert is one of France\'s oldest cheeses. Made with raw cow\'s milk. It\'s creamy, mellow and salty.","https://mellischeese.net/wp-content/uploads/2020/04/fourme-d-ambert-.jpg" ,10.00, 7.00);
        produceRepository.save(produce4);

        Produce produce5 = new Produce( "Hard Cheese", "Smoked Cheddar", "Auld Reekie", "Scotland", "A two day curd cow\'s milk cheese from Aberdeenshire. Auld Reekie is smoked over whisky barrel shavings. Named after Scotland\'s capital, Edinburgh due to its smokey flavour. A fresh and mild taste with a nice crumbly texture", "https://mellischeese.net/wp-content/uploads/2017/12/Snapseed-2-copy.jpg", 10.00, 8.00 );
        produceRepository.save(produce5);

        Produce produce6 = new Produce( "Hard Cheese", "Raw Goats Milk", "Bethmale Chevre", "France", "A rubbed, brushed and lightly washed rind housing a chewy-textured cheese, pitted with tiny pinholes. Lovely earthy, floral flavours with nutty rustic undertones in the taste.", "https://mellischeese.net/wp-content/uploads/2017/10/IMG_9678.jpg", 10.00, 7.00);
        produceRepository.save(produce6);

        Produce produce7 = new Produce("Hard Cheese", "Gruyere", "Comte", "France","This Comté has been aged for 22months to give a greater depth of flavour. The complex array of sweet, nutty, floral and herbal notes to be found in Comté is attributed to the cows that supply the milk, and the rich grasslands they roam.", "https://mellischeese.net/wp-content/uploads/2018/01/IMG_9874.jpg", 10.00, 8.00);
        produceRepository.save(produce7);

        Produce produce8 = new Produce("Hard Cheese", "Cheddar", "Auld Lochagar", "Scotland", "Matured for 12 months resulting in a complex flavour, this cheese is rich and fruity with a sharp bite. Although smooth Lochnagar has a slightly drier texture than our other cheddar types, it is also mellower and fruitier.", "https://mellischeese.net/wp-content/uploads/2017/10/IMG_9633-2.jpg", 10.00, 5.00 );
        produceRepository.save(produce8);

        Produce produce9 = new Produce("Soft Cheese", "Goats Cheese", "Elrick Log", "Scotland", "Elrick Log is a fresh, lactic, log-shaped goat cheese with a distinctive lemon flavour and a silky smooth, thick texture. This vivid ash coated goat log, with a natural rind. Made in Lanarkshire, Scotland.", "https://mellischeese.net/wp-content/uploads/2020/01/Screenshot-2020-06-03-at-18.54.55.png",6.00, 12.00);
        produceRepository.save(produce9);

        Produce produce10 = new Produce("Soft Cheese", "Brie", "Clava Brie", "ScotLand", "A pasteurised brie made in Inverness-shire, Scotland. A soft and creamy cow\'s milk cheese with a nice bite. Clava is named after a bronze aged circular burial cairn near the farm.","https://mellischeese.net/wp-content/uploads/2017/12/IMG_9682.jpg", 10.00, 4.00);
        produceRepository.save(produce10);

        Produce produce11 = new Produce("Soft Cheese","Camembert", "Camembert Reaux", "France", "The classic French Camembert from one of the very best producers. It can be pungent and vegetal with mushroom-y undertones, though when slightly younger it is lactic and milky. Camembert Reaux is creamy rich texture and melting mouth feel.", "https://mellischeese.net/wp-content/uploads/2017/10/IMG_9687.jpg", 4.00, 8.50);
        produceRepository.save(produce11);

        Produce produce12 = new Produce("Soft Cheese", "Ewe\'s Milk Cheese", "Lancelot", "Scotland","A fresh ewe\'s milk cheese made in Lanarkshire. Lemony, citrusy and fresh flavours with a creamy texture. Made in Lanarkshire, Scotland.","https://mellischeese.net/wp-content/uploads/2020/04/lancelot.jpg", 4.00, 9.00);
        produceRepository.save(produce12);

        Produce produce13 = new Produce("Biscuit", "Oatcake", "Adamsons Oatcakes", "Scotland", "A classic Scottish Oatcake made in Pittenweem, Fife. Crumbly, earthy and oaty. A perfect addition to a cheeseboard and fantastic with our Spicy Tomato Chutney", "https://mellischeese.net/wp-content/uploads/2017/10/IMG_0059.jpg", 00.50, 2.25);
        produceRepository.save(produce13);

        Produce produce14 = new Produce("Flour", "Pasta Flour", "Tre Grazie Tipo '00'", "Italy", "Tre Grazie means ‘the three graces’, and each bag of flour is adorned with an illustration of beauty, mirth and elegance", "https://mellischeese.net/wp-content/uploads/2020/04/pasta-flour-copy.jpg", 00.50, 2.96);
        produceRepository.save(produce14);

        Produce produce15 = new Produce("Flour", "Beard Flour", "Mungoswells Strong Bread Flour", "Scotland", "Strong Bread flour made by Mungoswells in East Lothian, Scotland. Their flour is made entirely from wheat grown in East Lothian. They grow different varieties of wheat suitable for making different types of flour.", "https://mellischeese.net/wp-content/uploads/2020/04/bread-flour-1-1.jpg", 1.00, 3.10);
        produceRepository.save(produce15);

        Produce produce16 = new Produce("Preserve", "Fruit", "Rosebud Fig Chutney", "Scotland", "Luxuary Chutney compliments any cheese board.", "https://mellischeese.net/wp-content/uploads/2017/10/IMG_0113.jpg", 1.50, 5.30);
        produceRepository.save(produce16);


        Order order1 = new Order(customer1);
        orderRepository.save(order1);
        order1.addProduce(produce7);
        order1.addProduce(produce10);
        order1.addProduce(produce13);

        orderRepository.save(order1);

        Order order2 = new Order(customer2);
        orderRepository.save(order2);
        order2.addProduce((produce5));
        order2.addProduce((produce12));
        order2.addProduce((produce16));
        order2.addProduce((produce8));

        orderRepository.save(order2);






    }
}
