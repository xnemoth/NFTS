import { useState } from "react";
import cart from "../assets/cart.png";
function SearchBar() {
  const [ActiveMenu, setActiveMenu] = useState();

  return (
    <div>
      <nav className="bg-[#0D0D0D] border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <div className="flex flex-row justify-start sm:ml-4 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`${ActiveMenu === 0 ? 'text-white bg-gray-700' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    aria-current="page"
                    onClick={() => setActiveMenu(0)}
                  >
                    Ecommerce
                  </a>
                  <a
                    href="#"
                    className={`${ActiveMenu === 1 ? 'text-white bg-gray-700' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    onClick={() => setActiveMenu(1)}
                  >
                    Shop
                  </a>
                  <a
                    href="#"
                    className={`${ActiveMenu === 2 ? 'text-white bg-gray-700' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    onClick={() => setActiveMenu(2)}
                  >
                    Stories
                  </a>
                  <a
                    href="#"
                    className={`${ActiveMenu === 3 ? 'text-white bg-gray-700' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    onClick={() => setActiveMenu(3)}
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:absolute inset-y-0 right-0 md:flex items-center pr-2 ">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 focus:outline-none hover:bg-gray-700 hover:text-white"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Cart</span>
                <img src={cart} />
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full text-sm focus:outline-none"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only"></span>
                    <p className="text-white">Login</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
