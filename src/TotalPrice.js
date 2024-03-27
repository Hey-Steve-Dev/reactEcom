import React, { useEffect } from 'react';

const TotalPrice = ({ item, duplicateItems, subTotal, setSubTotal }) => {
  let itemsArray = JSON.parse(duplicateItems);
  let itemCounter = 0;

  // Iterate over the array to count items
  itemsArray.forEach((element) => {
    if (element.id === item.id) {
      itemCounter++;
    }
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // Calculate the total price
  
  let totalPrice = item.price * (itemCounter + 1) ;
  let priceInDollars = formatter.format(totalPrice);
  

  useEffect(() => {
    // Update the subTotal state whenever the total price changes
    setSubTotal(prevSubTotal => prevSubTotal + totalPrice);
  }, [totalPrice, setSubTotal]);


  return <div>{priceInDollars}</div>;
};

export default TotalPrice;
