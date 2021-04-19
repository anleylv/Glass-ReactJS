import React, { Component } from "react";
import Card from "./Card";
import List from "./List";

class Main extends Component {
  state = {
    image: { name: "GUCCI G8850U", imgSrc: "../img/v1.png", price: "$30" },
  };
  listImage = [
    { name: "GUCCI G8850U", imgSrc: "../img/v1.png", price: "$30" },
    { name: "GUCCI G8759H", imgSrc: "../img/v2.png", price: "$50" },
    { name: "DIOR D6700HQ", imgSrc: "../img/v3.png", price: "$30" },
    { name: "DIOR D6005U", imgSrc: "../img/v4.png", price: "$30" },
    { name: "PRADA P8750", imgSrc: "../img/v5.png", price: "$30" },
    { name: "PRADA P9700", imgSrc: "../img/v6.png", price: "$30" },
    { name: "FENDI F8750", imgSrc: "../img/v7.png", price: "$30" },
    { name: "FENDI F8500", imgSrc: "../img/v8.png", price: "$30" },
    { name: "FENDI F4300", imgSrc: "../img/v9.png", price: "$30" },
  ];
  changeImage = (item) => {
    this.setState({ image: item });
  };
  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <Card image={this.state.image} />
              <List
                changeImage={this.changeImage}
                listImage={this.listImage}
              />
            </div>
          </div>
        </section>
      </div>
    );
}
}
export default Main;
