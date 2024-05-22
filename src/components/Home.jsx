import * as React from "react";

function Home() {
  return (
    <div className="flex flex-col pb-20 bg-indigo-50">
      <div className="justify-center self-center mt-9 w-full max-w-[1826px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-7 pt-6 pb-20 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <div className="self-stretch max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-between items-center w-full bg-white rounded-2xl shadow-sm max-md:mt-8">
                      <div className="shrink-0 self-stretch bg-rose-600 rounded-2xl h-[149px] w-[18px]" />
                      <div className="flex justify-center items-center self-stretch px-3.5 my-auto bg-rose-600 rounded-full h-[75px] w-[75px]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/920197aea7e84e45e8f48602554e0d4ba22c4adf6391a28ffbd2a0d889490588?apiKey=5571847fc48447bbad48faecb3b890d9&"
                          className="aspect-square w-[50px]"
                        />
                      </div>
                      <div className="flex flex-col self-stretch my-auto text-justify">
                        <div className="self-center text-3xl font-bold text-sky-950">
                          6305
                        </div>
                        <div className="mt-3.5 text-base text-sky-950 text-opacity-70">
                          Total Students
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-between items-center w-full bg-white rounded-2xl shadow-lg max-md:mt-8">
                      <div className="shrink-0 self-stretch bg-amber-300 rounded-2xl h-[149px] w-[18px]" />
                      <div className="flex justify-center items-center self-stretch px-3.5 my-auto bg-amber-300 rounded-full h-[75px] w-[75px]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3af555108977a11be62ee8dd55158d5db8dc3d47bf37beba426f5a65aa09a3d?apiKey=5571847fc48447bbad48faecb3b890d9&"
                          className="aspect-square w-[50px]"
                        />
                      </div>
                      <div className="flex flex-col self-stretch my-auto text-justify">
                        <div className="self-center text-3xl font-bold text-sky-950">
                          800
                        </div>
                        <div className="mt-3.5 text-base text-sky-950 text-opacity-70">
                          Total Teachers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center items-start px-11 py-7 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-8">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&"
                        className="w-24 aspect-square"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center items-start px-11 py-7 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-8">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6135f2d6479fc1b5159bee8a08ac44a76199c923d8f7fa30bb68b13ba070f79a?apiKey=5571847fc48447bbad48faecb3b890d9&"
                        className="w-24 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-16 max-w-full w-[615px] max-md:flex-wrap max-md:mt-10">
                <div className="flex-auto my-auto text-xl font-bold text-justify text-sky-950">
                  School Event Calendar
                </div>
                <div className="flex flex-auto gap-5 justify-center items-center px-6 py-2 rounded-2xl border-2 border-blue-200 border-solid shadow-2xl max-md:px-5">
                  <div className="flex gap-1.5 self-stretch my-auto">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/780fad30c84773a561db741cb9f3e202888964f2265bae4e75e32c64fb99287f?apiKey=5571847fc48447bbad48faecb3b890d9&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68132b2a95b2105ed34effbb3a34605c471f5f487c851e94fb78c57be42e6cf2?apiKey=5571847fc48447bbad48faecb3b890d9&"
                      className="shrink-0 aspect-[0.75] w-[15px]"
                    />
                  </div>
                  <div className="flex gap-2.5 self-stretch text-lg font-bold text-blue-900 whitespace-nowrap">
                    <div>April</div>
                    <div>2024</div>
                  </div>
                  <div className="flex gap-1.5 self-stretch my-auto">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6bec4817aa3f31a5b7ad43b3e91b6e0a86c22150167a27f1d59cbe4d6a58de2?apiKey=5571847fc48447bbad48faecb3b890d9&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5756b74ab58f8c791517658618184b7572aae1fba42a507010081a901903f3c9?apiKey=5571847fc48447bbad48faecb3b890d9&"
                      className="shrink-0 aspect-[0.85] w-[17px]"
                    />
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a59520c38988d3e9bf47b1ea45f4f07f2b3ccb10732ae2e6d59b45cba2355e80?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="mt-6 max-w-full border-2 border-blue-200 border-solid stroke-[2px] stroke-blue-200 w-[617px]"
              />
              <div className="flex gap-5 mt-5 text-xs text-blue-900 whitespace-nowrap max-md:flex-wrap">
                <div className="grow">Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div>Sunday</div>
              </div>
              <div className="flex gap-5 mt-3.5 max-w-full text-lg font-bold whitespace-nowrap text-sky-950 w-[615px] max-md:flex-wrap">
                <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border border-solid bg-blue-200 bg-opacity-20 border-slate-400 text-slate-400 max-md:pr-5">
                  31
                </div>
                <div className="flex flex-col justify-center text-amber-50 shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 ml-1 bg-rose-600 rounded-2xl border-2 border-rose-600 border-solid max-md:pr-5">
                    1
                  </div>
                </div>
                <div className="flex flex-col justify-center text-amber-50 shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 bg-rose-600 rounded-2xl border-2 border-rose-600 border-solid max-md:pr-5">
                    2
                  </div>
                </div>
                <div className="flex flex-col justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    3
                  </div>
                </div>
                <div className="flex flex-col justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    4
                  </div>
                </div>
                <div className="flex flex-col justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    5
                  </div>
                </div>
                <div className="items-start px-3.5 pt-3.5 pb-14 bg-amber-300 rounded-2xl border-2 border-amber-300 border-solid max-md:pr-5">
                  6
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-w-full text-lg font-bold whitespace-nowrap text-sky-950 w-[615px] max-md:flex-wrap">
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    7
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    8
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    9
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    10
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    11
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    12
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 bg-amber-300 rounded-2xl border-2 border-amber-300 border-solid max-md:pr-5">
                    13
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-5 max-w-full text-lg font-bold whitespace-nowrap text-sky-950 w-[615px] max-md:flex-wrap">
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    14
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    15
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    16
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    17
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    18
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    19
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-14 bg-amber-300 rounded-2xl border-2 border-amber-300 border-solid max-md:pr-5">
                    20
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-w-full text-lg font-bold whitespace-nowrap text-sky-950 w-[614px] max-md:flex-wrap">
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-16 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    21
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-16 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    22
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-16 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    23
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-16 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    24
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-16 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    25
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-16 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    26
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center shadow-lg">
                  <div className="items-start px-3.5 pt-3.5 pb-16 bg-amber-300 rounded-2xl border-2 border-amber-300 border-solid max-md:pr-5">
                    27
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-5 max-w-full whitespace-nowrap text-slate-400 w-[616px] max-md:flex-wrap">
                <div className="flex flex-col justify-center text-lg font-bold shadow-lg text-sky-950">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-blue-200 border-solid bg-blue-200 bg-opacity-50 max-md:pr-5">
                    28
                  </div>
                </div>
                <div className="flex flex-col justify-center text-lg font-bold shadow-lg text-sky-950">
                  <div className="items-start px-3.5 pt-3.5 pb-14 rounded-2xl border-2 border-solid bg-blue-200 bg-opacity-50 border-sky-950 max-md:pr-5">
                    29
                  </div>
                </div>
                <div className="flex flex-col justify-center text-amber-50 shadow-lg">
                  <div className="flex flex-col items-start py-4 pr-8 pl-3.5 w-full rounded-2xl border-2 border-blue-200 border-solid bg-sky-950 max-md:pr-5">
                    <div className="text-lg font-bold">30</div>
                    <div className="flex gap-0.5 mt-4 text-xs font-light">
                      <div className="shrink-0 w-0.5 bg-amber-300 rounded-md h-[23px]" />
                      <div className="my-auto">Event</div>
                    </div>
                  </div>
                </div>
                <div className="items-start px-3.5 pt-3.5 pb-16 text-lg font-bold rounded-2xl border border-solid bg-blue-200 bg-opacity-20 border-slate-400 max-md:pr-5">
                  1
                </div>
                <div className="items-start px-3.5 pt-3.5 pb-16 text-lg font-bold rounded-2xl border border-solid bg-blue-200 bg-opacity-20 border-slate-400 max-md:pr-5">
                  2
                </div>
                <div className="items-start px-3.5 pt-3.5 pb-16 text-lg font-bold rounded-2xl border border-solid bg-blue-200 bg-opacity-20 border-slate-400 max-md:pr-5">
                  3
                </div>
                <div className="items-start px-3.5 pt-3.5 pb-16 text-lg font-bold rounded-2xl border border-amber-300 border-solid bg-amber-300 bg-opacity-40 max-md:pr-5">
                  4
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="shrink-0 mx-auto max-w-full bg-white rounded-3xl h-[1249px] w-[1046px] max-md:mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;