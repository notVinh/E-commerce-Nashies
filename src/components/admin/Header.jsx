const Header = () => {
  return (
    <div className="flex justify-between items-center text-textColor mb-3">
      <a href="/admin">
        <img
          className="mx-1"
          src="https://raw.githubusercontent.com/notVinh/PORTFOLIO-v2/main/public/assets/icons/nashies-high-resolution-logo-color-on-transparentpng%20(2).png"
          alt="logo"
          width={150}
        />
      </a>
      <div className="flex justify-between items-center">
        <div className="text-[12px] ">
          <div>
            Hey<span className="text-black font-bold text-[13px]"> Vinh</span>
          </div>
          <div>Admin</div>
        </div>
        <img
          className="rounded-full ml-3"
          src="vinh"
          alt="avatar"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
};

export default Header;
