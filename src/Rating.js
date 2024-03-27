import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';


const Rating = ({ item }) => {
  // Destructure the rating object from item
  const { rating } = item;
  let starSet = <FaStar/> ;
  let starString = []
  
  const setStarRating = () =>{

    

    console.log(rating.rate);
    switch (true) {
        case  rating.rate < 1:
          console.log("less than 1.");
          starString = [<FaStarHalf/>]
          break;
        case  rating.rate === 1:
            console.log("rating is 1.");
            starString = [<FaStar/>]
            break;
        case  rating.rate < 2:
          console.log("Between 1 and 1.9");
          starString = [<FaStar/>, <FaStarHalf/>]
          break;
        case  rating.rate === 2:
            console.log("rating is 2.");
            starString = [<FaStar/>, <FaStar/>]
            break;
        case  rating.rate < 3:
          console.log("between 2 and 2.9");
          starString = [<FaStar/>, <FaStar/>, <FaStarHalf/>]
          break;
        case  rating.rate === 3:
            console.log("rating is 3");
            starString = [<FaStar/>, <FaStar/>, <FaStar/>]
            break;
        case  rating.rate < 4:
          console.log("between 3 and 3.9");
          starString = [<FaStar/>, <FaStar/>, <FaStar/>, <FaStarHalf/>]
          break;
        case  rating.rate === 4:
            console.log("rating is 4");
            starString = [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>]
            break;
        case  rating.rate < 5:
          console.log("between 4 and 4.9");
          starString = [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStarHalf/>]
          break;
        case rating.rate = 5 :
          console.log("rating is 5");
          starString = [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>]
          break;
        default:
          console.log("error");
      }
      
  }

  setStarRating();

  
  return (
    <div className='reviewBlock'>
       {starString}

    <div className='ratingText'>Rating {rating.rate}</div>
    <br/>
    <div className='reviewText'>Reviews {rating.count}</div>
    
    </div>
  );
}

export default Rating;
