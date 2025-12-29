function filterdata(searchtext, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchtext.toLowerCase())
  );
}

export default filterdata;
