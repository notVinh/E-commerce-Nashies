import { useEffect, useState } from "react";
import Card from "../components/product/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  filterItem,
  getAllProduct,
  pagination,
} from "../redux/slices/productSlide";
import { searchItem } from "../redux/slices/filterSlice";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Product = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("all");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const data = useSelector((state) => {
    return state.product;
  });

  // useEffect(() => {
  //   dispatch(pagination(page));
  // }, [page]);

  useEffect(() => {
    const res = {
      filterType: type,
      filterName: name,
      filterPrice: price,
      searchText: search,
      pageNum: page,
    };
    dispatch(filterItem(res));
    // console.log(res);
  }, [type, name, price, search, page]);

  // console.log(data.products);

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
  const handleChangeStyle = (e) => {
    setName(e.target.value);
    setType("");
    setPrice(0);
  };

  return (
    <div className="flex justify-center w-full px-12 py-7">
      <div className="w-3/12 flex-col text-left bg-white p-4 rounded-xl max-h-screen">
        <div className="border-gray-300 border-b-1 pb-5 relative">
          <div className="font-bold text-center pb-5">Search</div>
          <input
            type="text"
            className="border-2 w-full py-1 px-5 rounded-full "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* {searchText.length > 0 && (
            <div className="bg-white px-4 border-b-2 border-l-2 border-r-2 min-h-[200px] border-gray-400 absolute w-full max-h-full">
              Vinh
            </div>
          )} */}
        </div>
        <div className="pb-7 pt-3 border border-t-0 border-l-0 border-r-0 border-b-gray-300">
          <div className="font-bold text-center pb-5">Style</div>
          <div className="flex flex-col items-start text-left">
            <div className="mb-2">
              <input
                type="radio"
                id="all"
                name="Style"
                value="all"
                onClick={handleChangeStyle}
                defaultChecked
              />
              <label className="ml-2" htmlFor="all">
                All
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="low"
                name="Style"
                value="low"
                onClick={() => setName("low")}
              />
              <label className="ml-2" htmlFor="low">
                Low Top
              </label>
            </div>
            <div className="mb-2">
              <input type="radio" id="high" name="Style" value="high" />
              <label className="ml-2" htmlFor="high">
                High Top
              </label>
            </div>
            <div className="mb-2">
              <input type="radio" id="mid" name="Style" value="mid" />
              <label className="ml-2" htmlFor="mid">
                Mid Top
              </label>
            </div>
          </div>
        </div>
        <div className="pb-7 pt-3 border border-t-0 border-l-0 border-r-0 border-b-gray-300">
          <div className="font-bold text-center pb-5">Gender</div>
          <div className="mb-2">
            <input
              type="checkbox"
              id="men"
              name="Men"
              value={`Men's Shoes`}
              onChange={(e) => {
                if (type === "") {
                  setType(e.target.value);
                } else {
                  setType("");
                }
              }}
            />
            <label className="ml-2" htmlFor="men">
              Men
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="women"
              name="Women"
              value={`Women's Shoes`}
              onChange={(e) => {
                if (type === "") {
                  setType(e.target.value);
                } else {
                  setType("");
                }
              }}
            />
            <label className="ml-2" htmlFor="women">
              Women
            </label>
          </div>
        </div>
        <div className="pb-7 pt-3 border border-t-0 border-l-0 border-r-0 border-b-gray-300">
          <div className="font-bold text-center pb-5">Price</div>
          <div className="mb-2">
            <input
              type="checkbox"
              id="under1m"
              name="Under1m"
              value="Under1m"
              onChange={() => setPrice(3669000)}
            />
            <label className="ml-2" htmlFor="under1m">
              Under 1.000.000
            </label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="1mto5m" name="1mto5m" value="1mto5m" />
            <label className="ml-2" htmlFor="1mto5m">
              1.000.000 - 5.000.000{" "}
            </label>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              id="5mto10m"
              name="5mto10m"
              value="5mto10m"
            />
            <label className="ml-2" htmlFor="5mto10m">
              5.000.000 - 10.000.000{" "}
            </label>
          </div>

          <div>
            <input type="checkbox" id="up10m" name="Up10m" value="Up10m" />
            <label className="ml-2" htmlFor="up10m">
              Up 10.000.000
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center p-6 bg-white mx-12 rounded-xl">
        <div className="flex flex-wrap justify-start w-full">
          {data.filterProducts.map((item) => (
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
        <div className="flex justify-center mt-5 items-center">
          <button>
            <MdKeyboardArrowLeft />
          </button>
          <span className="mx-4">Page {page}</span>
          <button>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
