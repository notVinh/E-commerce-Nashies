import { useEffect, useState } from "react";
import Card from "../components/product/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/slices/productSlide";

const Product = () => {
  const [param, setParam] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.product;
  });
  useEffect(() => {
    dispatch(getAllProduct(param));
  }, [param]);

  // const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  // const getData = async (params) => {
  //   const res = await axios.get(
  //     `https://nashiesapi.vercel.app/api/sneakers${params}`
  //   );
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   getData(search);
  // }, [search]);

  return (
    <div className="flex justify-center w-full px-12 pt-20">
      <div className="w-3/12 flex-col text-left">
        <div className="pb-7 pt-3 border border-t-0 border-l-0 border-r-0 border-b-gray-300">
          <div className="font-bold text-center pb-5">Style</div>
          <div>Low Top</div>
          <div>Mid Top</div>
          <div>High Top</div>
        </div>
        <div className="pb-7 pt-3 border border-t-0 border-l-0 border-r-0 border-b-gray-300">
          <div className="font-bold text-center pb-5">Gender</div>
          <div>
            <input type="checkbox" id="men" name="Men" value="Men" />
            <label htmlFor="men">Men</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="women"
              name="Women"
              value={"search?type=women"}
              onChange={(e) => {
                if (e.target.checked) {
                  setParam(e.target.value);
                } else {
                  setParam("");
                }
              }}
            />
            <label htmlFor="women">Women</label>
          </div>
        </div>
        <div className="pb-7 pt-3 border border-t-0 border-l-0 border-r-0 border-b-gray-300">
          <div className="font-bold text-center pb-5">Price</div>
          <div>
            <input
              type="checkbox"
              id="under1m"
              name="Under1m"
              value="Under1m"
            />
            <label htmlFor="under1m">Under 1.000.000</label>
          </div>
          <div>
            <input type="checkbox" id="1mto5m" name="1mto5m" value="1mto5m" />
            <label htmlFor="1mto5m">1.000.000 - 5.000.000 </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="5mto10m"
              name="5mto10m"
              value="5mto10m"
            />
            <label htmlFor="5mto10m">5.000.000 - 10.000.000 </label>
          </div>

          <div>
            <input type="checkbox" id="up10m" name="Up10m" value="Up10m" />
            <label htmlFor="up10m">Up 10.000.000</label>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between px-16">
        {data.products.map((item) => (
          // <Card
          //   img={item.img}
          //   key={item.id}
          //   name={item.name}
          //   type={item.type}
          //   version={item.brand}
          //   color="yellow"
          //   price={item.price}
          // />
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
