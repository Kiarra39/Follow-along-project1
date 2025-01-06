import { useState, useEffect } from 'react';
import Card from '../component/ProductCard/Card';
import axios from 'axios';
function HomePage() {
  const [data, setdata] = useState();
    const fetchProduct= async()=>{
      const response= await axios.get(
        'http://localhost:8080/product/get-products'
      );
      setdata(response.data.data);

    };

useEffect(()=>{
  console.log('clicked');
  const callhandle= async()=>{
    await fetchProduct();
  };
  callhandle();
},[]);
  console.log(data);

  return (
    <div>
      <h1 className="text-center">Home Page for Follow along</h1>
  
      <div className="grid grid-cols-3">

        {data && data.length > 0 ? (
          data?.map((ele, index) => {
            return (
              <div key={index} style={{ margin: 'auto' }} className="border border-white">
                <Card
                  title={ele.title}
                  image={ele.images[0] ? ele.images[0] : 'Product Imge missing'}
                  Index={index}
                  description={ele.description}
                  originalPrice={ele.originalPrice}
                  discountedPrice={ele.discountedPrice}
                  rating={ele.rating}
                />
              </div>
            );
          })
        ) : (
          <p>No products found.</p> // Display a message if no data is available
        )}

        {data.map((ele, index) => {
          return (
            <div style={{ margin: 'auto' }} className="border border-white" key={index}>
            <Card title={ele.title} index={index} />
          </div>
          );
        })}

      </div>
    </div>
  );}
export default HomePage;