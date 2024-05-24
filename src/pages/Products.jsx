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
import { IoMdArrowDropdown } from "react-icons/io";

const Product = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [gender, setGender] = useState([]);
  const [pricef, setPricef] = useState(0);
  const [pricet, setPricet] = useState(0);

  const [openSort, setOpenSort] = useState(true);
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(pricef, pricet);
    const getOptions = () => {
      let options = "";
      if (
        search === "" &&
        type === "all" &&
        gender === "" &&
        gender.length === 0 &&
        pricef == 0 &&
        pricet == 0 &&
        sort === ""
      ) {
        options = `/`;
      } else {
        let searchQuery = ``;
        if (search.length > 0) searchQuery = `search=${search}&`;
        let typeQuery = ``;
        if (type === "all") {
          typeQuery = ``;
        } else {
          typeQuery = `type=${type}&`;
        }
        let genderQuery = ``;
        if (gender.length === 0) {
          genderQuery = ``;
        } else {
          // const vinh = [...gender].join(", ");
          // console.log(vinh);
          genderQuery = `gender=${gender}&`;
        }
        let priceQuery = ``;
        if (pricef == 0 && pricet == 0) {
          priceQuery = ``;
        } else {
          priceQuery = `from=${pricef}&to=${pricet}&`;
        }
        let sortQuery = ``;
        if (sort === "") {
          sortQuery = ``;
        } else {
          sortQuery = sort;
        }
        options = `/get?${searchQuery}${typeQuery}${genderQuery}${priceQuery}${sortQuery}page=${page}&limit=${limit}`;
      }
      return options;
    };

    // dispatch(getAllProduct(`get?page=${page}`));
    dispatch(getAllProduct(getOptions()));
  }, [search, page, limit, type, gender, pricef, pricet, sort]);

  const data = useSelector((state) => {
    return state.product;
  });

  // useEffect(() => {
  //   dispatch(pagination(page));
  // }, [page]);

  // useEffect(() => {
  //   const res = {
  //     filterType: type,
  //     filterName: name,
  //     filterPrice: price,
  //     searchText: search,
  //     pageNum: page,
  //   };
  //   dispatch(filterItem(res));
  //   // console.log(res);
  // }, [type, name, price, search, page]);

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
  // const handleChangeStyle = (e) => {
  //   setType(e.target.value);
  //   setType("");
  //   setPrice(0);
  // };

  return (
    <div className="flex justify-center w-full px-12 py-7">
      <div className="w-3/12 flex-col text-left bg-white p-4 rounded-xl max-h-screen xl:flex hidden">
        <div className="border-gray-300 border-b-1 pb-5 relative ">
          <div className="font-bold text-center pb-5">Search</div>
          <input
            type="text"
            className="border-2 w-full py-1 px-5 rounded-full "
            value={search}
            onChange={(e) => {
              // setSearch(e.target.value)
              const valueChange = e.target.value;
              if (!valueChange.startsWith(" ")) {
                setSearch(valueChange);
              }
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
                onClick={() => setType("all")}
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
                onClick={() => setType("low")}
              />
              <label className="ml-2" htmlFor="low">
                Low Top
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="high"
                name="Style"
                value="high"
                onClick={() => setType("high")}
              />
              <label className="ml-2" htmlFor="high">
                High Top
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="mid"
                name="Style"
                value="mid"
                onClick={() => setType("mid")}
              />
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
              type="radio"
              id="men"
              name="Men"
              value={`men`}
              onChange={(e) => {
                if (gender.includes(e.target.value)) {
                  setGender((pre) =>
                    [...pre].filter((item) => item !== e.target.value)
                  );
                } else {
                  setGender((pre) => [...pre, e.target.value]);
                }
              }}
            />
            <label className="ml-2" htmlFor="men">
              Men
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="women"
              name="Women"
              value={`women`}
              onChange={(e) => {
                if (gender.includes(e.target.value)) {
                  setGender((pre) =>
                    [...pre].filter((item) => item !== e.target.value)
                  );
                } else {
                  setGender((pre) => [...pre, e.target.value]);
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
              type="radio"
              id="allprice"
              name="Price"
              value="allprice"
              defaultChecked
              onClick={() => {
                setPricef(0);
                setPricet(0);
              }}
            />
            <label className="ml-2" htmlFor="allprice">
              All price
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="under1m"
              name="Price"
              value="Under1m"
              onClick={() => {
                setPricef(0);
                setPricet(1000000);
              }}
            />
            <label className="ml-2" htmlFor="under1m">
              Under 1.000.000
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="1mto5m"
              name="Price"
              value="1mto5m"
              onClick={() => {
                setPricef(1000000);
                setPricet(5000000);
              }}
            />
            <label className="ml-2" htmlFor="1mto5m">
              1.000.000 - 5.000.000{" "}
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="5mto10m"
              name="Price"
              value="5mto10m"
              onClick={() => {
                setPricef(5000000);
                setPricet(10000000);
              }}
            />
            <label className="ml-2" htmlFor="5mto10m">
              5.000.000 - 10.000.000{" "}
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="up10m"
              name="Price"
              value="Up10m"
              onClick={() => {
                setPricef(10000000);
                setPricet(100000000);
              }}
            />
            <label className="ml-2" htmlFor="up10m">
              Up 10.000.000
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center xl:p-6 bg-transparent xl:bg-white xl:mx-10 rounded-xl">
        <div className="justify-end flex items-center relative">
          <button
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center"
            onClick={() => {
              setOpenSort(!openSort);
            }}
          >
            Sort
            <IoMdArrowDropdown />
          </button>
          <div
            id="dropdownNavbar"
            className={`${
              openSort && `hidden`
            } border-2 absolute top-[25px] z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <div
                  onClick={() => {
                    setSort("sort=price,desc&");
                    setOpenSort(!openSort);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  Price (Low - High)
                </div>
              </li>
              <li>
                <a
                  onClick={() => {
                    setSort("sort=price,asc&");
                    setOpenSort(!openSort);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  Price (High - Low)
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setSort("sort=name,desc&");
                    setOpenSort(!openSort);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  Name (Z - A)
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setSort("sort=name,asc&");
                    setOpenSort(!openSort);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  Name (A - Z)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap xl:justify-start justify-center w-full ">
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
        <div className="flex justify-center mt-5 items-center ">
          <button
            onClick={() => {
              if (page === 1) {
                setPage(1);
              } else {
                setPage(page - 1);
              }
            }}
          >
            <MdKeyboardArrowLeft />
          </button>
          <span className="mx-4">Page {page}</span>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
