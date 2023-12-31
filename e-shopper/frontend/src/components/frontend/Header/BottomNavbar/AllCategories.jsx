const AllCategories = () => {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-8 items-center">
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <div className="flex">
                    <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      ></div>

                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              <div className="group relative text-base sm:text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                                    alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                                    className="object-cover object-center"
                                  />
                                </div>
                                <a
                                  href="#"
                                  className="mt-6 block font-medium text-gray-900"
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  ></span>
                                  Artwork Tees
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            </div>
                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              <div>
                                <p
                                  id="Clothing-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Clothing
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Clothing-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Tops
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Pants
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Sweaters
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      T-Shirts
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Jackets
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Activewear
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Browse All
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <p
                                  id="Accessories-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Accessories
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Accessories-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Watches
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Wallets
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Bags
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Sunglasses
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Hats
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Belts
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <p
                                  id="Brands-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Brands
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Brands-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Re-Arranged
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Counterfeit
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Full Nelson
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      My Way
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AllCategories;
