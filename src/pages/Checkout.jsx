import { BsBox2 } from "react-icons/bs";
import CheckoutCard from "../components/checkout/CheckoutCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { addOrder } from "../redux/slices/checkoutSlice";
import Success from "../components/Success";
import { clearCart } from "../redux/slices/cartSlice";

const Checkout = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const { cartItems, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const getTime = () => {
    const today = new Date();
    const nextSevenday = new Date(today.setDate(today.getDate() + 7));
    return nextSevenday;
  };

  const today = new Date().toJSON().slice(0, 10);

  useEffect(() => {
    if (userInfo) {
      setLastname(userInfo.name);
      setEmail(userInfo.email);
      setAddress(userInfo.address);
      setPhoneNum(userInfo.phone);
      setLogin(true);
    }
  }, []);

  const handleSubmit = async () => {
    const data = {
      // name: firstname + lastname ,
      name: lastname,
      address: address,
      email: email,
      phone: phoneNum,
      orderItems: cartItems,
      total: total,
      date: today,
    };

    // console.log("order...", data);

    dispatch(addOrder(data));

    dispatch(clearCart());
    setOpen(true);
  };

  return (
    <div className="my-7 mx-12 py-7 px-16 bg-white rounded-xl">
      <div className="flex justify-between">
        <div className=" w-5/12">
          <div className="flex-col">
            <div>
              <div className="text-left text-xl font-semibold ">
                How would you like to get your order?
              </div>
              <div className="w-full p-[19px] border-black border-2 text-left flex items-center rounded-xl my-7">
                <BsBox2 className="mr-5" />
                Deliver it
              </div>
              {/* <div className="flex-col items-start">
                <div className="w-2/3 px-6 py-3 border-2 border-gray-300 text-left rounded-full mb-2">
                  Become a Member
                </div>
                <div className="w-2/3 px-6 py-3 border-2 border-gray-300 text-left rounded-full">
                  Login
                </div>
              </div> */}
              <div>
                <div className="pb-5 text-left font-semibold">
                  Your name and address:
                </div>
                <div>
                  {/* <input
                    className="border-2 border-black p-4 rounded-lg w-full"
                    type="text"
                    placeholder="Name"
                    required
                  /> */}
                  <div className="relative z-0 w-full mb-6 group text-left">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-4 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-lg"
                      placeholder=" "
                      required
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label
                      htmlFor="floating_email"
                      className="ml-4 p-1 z-10 bg-white peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group text-left">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-4 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-lg"
                      placeholder=" "
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <label
                      htmlFor="floating_email"
                      className="ml-4 p-1 z-10 bg-white peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group text-left">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-4 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-lg"
                      placeholder=" "
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <label
                      htmlFor="floating_email"
                      className="ml-4 p-1 z-10 bg-white peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Address
                    </label>
                  </div>
                </div>
                <div className="pb-5 text-left font-semibold">
                  Your contact information
                </div>
                <div className="relative z-0 w-full mb-6 group text-left">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-4 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-lg"
                    placeholder=" "
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="floating_email"
                    className="ml-4 p-1 z-10 bg-white peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group text-left">
                  <input
                    type="number"
                    name="phone_number"
                    id="phone_number"
                    className="block py-4 px-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-lg"
                    placeholder=" "
                    required
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                  <label
                    htmlFor="phone_number"
                    className="ml-4 p-1 z-10 bg-white peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number
                  </label>
                </div>
                {/* <div className="flex items-start">
                  <input type="checkbox" name="policy" id="policy" />
                  <label htmlFor="policy">
                    I have read and consent to eShopWorld processing my
                    information in accordance with the{" "}
                  </label>
                </div> */}
                <div
                  className="py-4 px-5 border-2 rounded-full mt-8 cursor-pointer bg-white text-black hover:bg-gray-400 hover:text-white"
                  onClick={handleSubmit}
                >
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-32">
          <div className="text-xl font-semibold pb-5 text-left">
            Order Summary
          </div>
          <div className="flex justify-between mb-2">
            <div>Subtotal</div> <span>{total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <div>Estimated Delivery & Handling</div> <span>free</span>
          </div>
          <div className="flex justify-between py-4 my-3 border-y-gray-200 border-x-0 border">
            <div> Total</div> <span className="font-medium">{total}</span>
          </div>
          <div className="text-lg font-semibold my-10">
            {`Arrives: ${getTime().getDate()} - ${
              getTime().getMonth() + 1
            } - ${getTime().getFullYear()} (7 days from today)`}
          </div>
          <div>
            {cartItems.map((item) => (
              <CheckoutCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Success isOpen={open} isLogin={login} />
    </div>
  );
};

export default Checkout;
