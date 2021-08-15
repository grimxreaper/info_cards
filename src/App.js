import ReactDOM from "react-dom";
import React from "react";
import "./output.css";
import cards from "./components/Cards";
import ItemList from "./components/Table";

function Card({
  img,
  property_name,
  address,
  base_rent,
  sqft,
  amount_per_sqft,
  amount_per_year,
}) {
  return (
    <div className="card">
      <img src={img} className="property_img" alt="property" />
      <div className="card__body">
        <h3 className="card__property">{property_name}</h3>
        <hr class="line"></hr>
        <h1>
          <span className="card__address">{address}</span>
          <a href="#">{base_rent}</a>
        </h1>
        <p className="card__details">
          {sqft} {amount_per_sqft} {amount_per_year}
        </p>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
    this.state = {
      displayTable: false,
    };
  }

  onCardClick() {
    this.setState({ displayTable: !this.state.displayTable });
  }

  render() {
    return (
      <div>
        <div className="wrapper" onClick={this.onCardClick}>
          {cards.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              property_name={card.property_name}
              address={card.address}
              description={card.description}
              base_rent={card.base_rent}
              sqft={card.sqft}
              amount_per_sqft={card.amount_per_sqft}
              amount_per_year={card.amount_per_year}
            />
          ))}
        </div>
        <div className="table">
          {this.state.displayTable ? (
            <div>
              <h2> Property Name Leases </h2> <ItemList />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
