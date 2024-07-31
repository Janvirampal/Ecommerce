import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../components/Assets/dropdown_icon.png';

const ShopCategory = () => {
    const { all_products, category } = useContext(ShopContext); 

    return (
        <div className="shop-category">
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-8</span> out of {all_products.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="Dropdown icon" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_products
                    .filter(item => item.category === category)
                    .map(item => (
                        <div key={item.id} className="item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-name">
                                {item.name}
                            </div>
                            <div className="item-prices">
                                <div className="item-price-new">
                                    Rs {item.new_price}
                                </div>
                                <div className="item-price-old">
                                    Rs {item.old_price}
                                </div>
                            </div>
                            <div>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ShopCategory;
