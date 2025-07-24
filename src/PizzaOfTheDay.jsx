import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheday = usePizzaOfTheDay();

  if (!pizzaOfTheday) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>{pizzaOfTheday.name}</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheday.name}</h3>
          <p>{pizzaOfTheday.description}</p>
          <p className="pizza-of-the-day-price">
            From: {intl.format(pizzaOfTheday.sizes.S)}
          </p>
        </div>
        <img
          src={pizzaOfTheday.image}
          alt={pizzaOfTheday.name}
          className="pizza-of-the-day-image"
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
