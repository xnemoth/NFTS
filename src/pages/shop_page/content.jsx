import React, { useEffect, useState } from "react";
import { API } from "../../CONSTANTS/API";

function ShopPage() {
  const [catagories, setcatagories] = useState([]);
  const [FilterCatList, setFilterCatList] = useState([]);
  const [ListProduct, setListProduct] = useState([]);
  const [ShowMenu, setShowMenu] = useState(false);
  const ColorList = ["black"];

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const response = await fetch(API + "/categories");

        const data = await response.json();

        if (data !== catagories) {
          setcatagories(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const loadProduct = async () => {
      try {
        const response = await fetch(API + "/products");

        const data = await response.json();

        if (data !== ListProduct) {
          setListProduct(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadCategory();
    loadProduct();
  }, []);

  console.log(ListProduct.data);

  return (
    <div>
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-8">
          <div className="flex flex-col justify-start px-4">
            <div className="flex flex-row justify-start my-4">
              <div className="text-black font-bold me-4">
                <h4>Filters</h4>
              </div>
              <div className="text-text_secondary border-b me-4 font-normal">
                Clear filters
              </div>
            </div>
            <div className="font-bold py-4">Categories</div>
            <div>
              <ul>
                {catagories != "" ? (
                  catagories.data.map((category) => (
                    <li key={category.id}>
                      <div className="flex flex-row items-center space-x-4">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            setFilterCatList((prev) => {
                              if (e.target.checked) {
                                return [...prev, category.id];
                              } else {
                                return prev.filter((id) => id !== category.id);
                              }
                            });
                          }}
                        />
                        <div className="flex-1">
                          <div>{category.name}</div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                      <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                          </div>
                          <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ul>
            </div>
            <div className="font-bold py-4">Color</div>
            <div>
              <ul>
                {ListProduct != ""
                  ? ListProduct.data.map((product) => (
                      <li key={product.id}>
                        <div className="flex flex-row items-center space-x-4">
                          {ColorList.map((color) => {
                            if (product.color.toLowerCase() === color) {
                              return (
                                <div
                                  key={color}
                                  className={`rounded-full border-1 h-6 w-6 bg-${color}`}
                                ></div>
                              );
                            }
                          })}
                        </div>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
          </div>
          <div className="col-span-6 flex flex-col">
            <div className="text-right py-2">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setShowMenu(!ShowMenu)}
                  >
                    Sort By
                    <svg
                      className="-mr-1 size-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={`${
                    ShowMenu ? "" : "hidden"
                  } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Popular
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Something
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right py-2">
              Showing{" "}
              {ListProduct != "" ? (
                ListProduct.data.length
              ) : (
                <button type="button" disabled>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 color-black"
                    viewBox="0 0 24 24"
                  ></svg>
                </button>
              )}{" "}
              products
            </div>
            <div className="grid grid-row align-middle items-center justify-center">
              <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-4">
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {ListProduct != ""
                      ? ListProduct.data.map((product) => (
                          <div key={product.id} className="group relative">
                            <img
                              src=""
                              alt="product image will be appear here"
                              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <a href="#">
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0"
                                    ></span>
                                    {product.name}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.color}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                $35
                              </p>
                            </div>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
