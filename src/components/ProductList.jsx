import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductDetails: {
                product_cd: "SP001",
                product_name: "iPhone 13 Pro",
                image_url: "https://example.com/iphone13pro.jpg",
                price: 1099.99,
                screen_type: "Super Retina XDR OLED",
                operating_system: "iOS 15",
                front_cam_resolution: "12 MP",
                back_cam_resolution: "12 MP (Wide), 12 MP (Ultra Wide), 12 MP (Telephoto)",
                ram: "6 GB",
                rom: "128 GB, 256 GB, 512 GB"
            }
        }
    }

    ProductList = [
        {
            product_cd: "SP001",
            product_name: "iPhone 13 Pro",
            image_url: "https://example.com/iphone13pro.jpg",
            price: 1099.99,
            screen_type: "Super Retina XDR OLED",
            operating_system: "iOS 15",
            front_cam_resolution: "12 MP",
            back_cam_resolution: "12 MP (Wide), 12 MP (Ultra Wide), 12 MP (Telephoto)",
            ram: "6 GB",
            rom: "128 GB, 256 GB, 512 GB"
        },
        {
            product_cd: "SP002",
            product_name: "Samsung Galaxy S22 Ultra",
            image_url: "https://example.com/galaxys22ultra.jpg",
            price: 1299.99,
            screen_type: "Dynamic AMOLED 2X",
            operating_system: "Android 12",
            front_cam_resolution: "40 MP",
            back_cam_resolution: "108 MP (Wide), 12 MP (Ultra Wide), 10 MP (Periscope Telephoto)",
            ram: "12 GB, 16 GB",
            rom: "256 GB, 512 GB, 1 TB"
        },
        {
            product_cd: "SP003",
            product_name: "Google Pixel 6 Pro",
            image_url: "https://example.com/pixel6pro.jpg",
            price: 899.99,
            screen_type: "LTPO OLED",
            operating_system: "Android 12",
            front_cam_resolution: "11.1 MP",
            back_cam_resolution: "50 MP (Wide), 12 MP (Ultra Wide)",
            ram: "12 GB",
            rom: "128 GB, 256 GB"
        },
        {
            product_cd: "SP004",
            product_name: "OnePlus 10 Pro",
            image_url: "https://example.com/oneplus10pro.jpg",
            price: 899.99,
            screen_type: "Fluid AMOLED",
            operating_system: "OxygenOS 13 (based on Android 13)",
            front_cam_resolution: "32 MP",
            back_cam_resolution: "48 MP (Wide), 50 MP (Ultra Wide), 8 MP (Telephoto)",
            ram: "8 GB, 12 GB",
            rom: "128 GB, 256 GB, 512 GB"
        }
    ];
    seeProductDetails = (product) => {
        this.setState({
            ProductDetails: product
        });
    };
    render() {
        let detail = this.state.ProductDetails;
        return (
            <div className="container">
                <h3 className="text-success">Product List</h3>
                <div className="row">
                    {
                        this.ProductList.map((prod, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <Product seeProductDetails={this.seeProductDetails} product={prod} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <br />
                        <h3 className="text-center">{detail.product_name}</h3>
                        <img className="card-img-top" src={detail.image_url} width={170} height={300} alt={detail.product_name} />
                    </div>
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td colSpan="2"><h3>Specifications</h3></td>
                                </tr>
                                <tr>
                                    <td>Screen type</td>
                                    <td>{detail.screen_type}</td>
                                </tr>
                                <tr>
                                    <td>Operating System</td>
                                    <td>{detail.operating_system}</td>
                                </tr>
                                <tr>
                                    <td>Front cam</td>
                                    <td>{detail.front_cam_resolution}</td>
                                </tr>
                                <tr>
                                    <td>Back_cam</td>
                                    <td>{detail.back_cam_resolution}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{detail.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{detail.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
