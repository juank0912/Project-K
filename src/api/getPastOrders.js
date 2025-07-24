export default async function getPastOrders(page) {
  const responde = await fetch(`/api/past-orders?page=${page}`);
  const data = await responde.json();
  return data;
}
