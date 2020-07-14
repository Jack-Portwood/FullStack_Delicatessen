package Models;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;

@Entity
@Table(name ="Produce")
public class Produce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="product_type")
    private String type;

    @Column(name="product_style")
    private String style;

    @Column(name="product_name")
    private String name;

    @Column(name="place_of_origin")
    private String origin;

    @Column(name="product_info")
    private String info;

    @Column(name="image")
    private String imgLink;

    @Column(name="retail_price")
    private Double costPrice;

    @Column(name="retail_price")
    private Double retailPrice;

    public Produce(String type, String style, String name,String origin, String info, String imgLink, Double costPrice, Double retailPrice) {
        this.type = type;
        this.style = style;
        this.name = name;
        this.origin = origin;
        this.info = info;
        this.imgLink = imgLink;
        this.costPrice = costPrice;
        this.retailPrice = retailPrice;
    }

    public Produce() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public Double getCostPrice() {
        return costPrice;
    }

    public void setCostPrice(Double costPrice) {
        this.costPrice = costPrice;
    }

    public Double getRetailPrice() {
        return retailPrice;
    }

    public void setRetailPrice(Double retailPrice) {
        this.retailPrice = retailPrice;
    }
}


