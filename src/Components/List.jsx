import React, { Component } from "react";

class List extends Component {
  render() {
    const { listImage, changeImage } = this.props;
    return (
      <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
        {listImage.map((item) => (
          <div className="col-3" key={item}>
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                changeImage(item);
              }}
            >
              <img
                src={item.imgSrc}
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
        ))}
      </section>
    );
  }
}

export default List;
