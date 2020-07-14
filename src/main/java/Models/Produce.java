package Models;

public class Produce {
    private Long id;
    private String type;
    private String style;
    private String name;
    private String origin;
    private String info;
    private String imgLink;
    private Double costPrice;
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


