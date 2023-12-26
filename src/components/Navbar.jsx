const Navbar = () => {
  return (
    <div>
      <nav className=" w-full flex h-16 bg-slate-900 justify-between items-center px-10">
        <h1 className=" font-bold text-3xl text-white">MovieNet</h1>
        <ul className="text-white">
          <li className=" cursor-pointer ">
            <button className="bg-white px-3 py-1 text-black font-semibold rounded-full">
              <a href="http://www.omdbapi.com">About OMDb</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
