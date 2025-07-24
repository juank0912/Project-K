import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheday, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheday ? `${pizzaOfTheday.id}` : "Loading...");

  useEffect(() => {
    async function fetchPizzaOfTheday() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheday();
  }, []);

  return pizzaOfTheday;
};
