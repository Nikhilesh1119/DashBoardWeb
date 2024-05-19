import * as React from "react";

function Teacherlist() {
  return (
    <div className="flex flex-col pb-16 bg-white">
      <div className="flex justify-center items-center self-center px-16 py-20 mt-10 w-full rounded bg-blue-200 bg-opacity-20 max-w-[1685px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pl-7 mb-2.5 w-full max-w-[1517px] max-md:pl-5 max-md:max-w-full">
          <div className="flex z-10 gap-0 self-start -mt-7 text-lg font-bold text-rose-600 max-md:flex-wrap">
            <div className="flex flex-col justify-center px-6 py-4 bg-white rounded border border-rose-600 border-solid shadow-2xl max-md:px-5">
              <div className="flex gap-4 py-1.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cbd2dba59442ac30cbc47ebfdfbb05549f8c13ee4ff98f70a3f2b2ec8ed6870?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 aspect-[1.06] fill-rose-600 w-[17px]"
                />
                <div className="flex-auto">New Teacher</div>
              </div>
            </div>
            <div className="justify-center px-11 py-4 bg-white border border-rose-600 border-solid shadow-2xl max-md:px-5">
              Import CSV
            </div>
            <div className="flex flex-col justify-center px-8 py-4 font-medium whitespace-nowrap bg-white rounded-none border border-rose-600 border-solid shadow-2xl max-md:px-5">
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/938e9dfbd5c54c5b4e2de9a7933606b9b17c2864d4e5e39ebd7468ff885d99b5?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 aspect-square w-[25px]"
                />
                <div className="justify-center py-1.5">Download</div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-start mt-12 text-lg font-medium text-slate-400 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3 p-4 bg-white rounded">
              <div>Add filter</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d8913f21c63270c02c55918e6234435fedd0e0c01da6d1027b3115e6fe0d68?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 my-auto w-2.5 aspect-[1.43] fill-slate-400"
              />
            </div>
            <div className="flex flex-col grow shrink-0 justify-center items-start py-0.5 bg-white rounded basis-0 w-fit max-md:max-w-full">
              <div className="flex gap-4 px-8 py-3.5 rounded-3xl max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6265cf1b040fd162d2935274e477677c5982884f8ab5c575f7933d460f3accb?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-8 aspect-square"
                />
                <div className="my-auto">Search here...</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-9 mt-12 bg-white rounded-3xl max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 self-center w-full text-lg font-bold text-indigo-900 whitespace-nowrap max-w-[1309px] max-md:flex-wrap max-md:max-w-full">
              <div className="text-blue-950">Name</div>
              <div>ID</div>
              <div>Gender</div>
              <div>Subject</div>
              <div>Contact</div>
              <div className="flex-auto">Coordinator</div>
              <div>Action</div>
            </div>
            <div className="flex gap-5 items-center py-9 pr-20 pl-9 mt-10 w-full bg-blue-200 bg-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium whitespace-nowrap text-stone-900">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Kavita</div>
              </div>
              <div className="flex-auto self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Female
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                Maths
              </div>
              <div className="flex gap-4 self-stretch px-px">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d53b7a8206a57911c23ab4a8f6bd726d6f0f56d870c407523f801f677c7b3f?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1cba793fe3b147129c7b06e6b9d0298567bd896b6b676365054a4db975ab6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94149d0023795abcae375ca0dd03cb4e1ddf2e05b73b5e2899c797b00921d8f6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-start w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9bd56cfebf4398a588c6085dc8d0ec1b11bdbcf1beca7c45f15afd5c468af0?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 whitespace-nowrap">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Teena</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                English
              </div>
              <div className="flex gap-4 self-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6f26dd2dfc7d821d443a694bace1cfaa403d8e2b88aa68d8f00fb968641dd6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1cba793fe3b147129c7b06e6b9d0298567bd896b6b676365054a4db975ab6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <div className="shrink-0 self-stretch my-auto w-8 h-8 bg-white rounded border-solid border-[3px] border-sky-950" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f2dc0b56d727b4a12096b942e18f99f4b2c6d2ccc1c22e9283b2a9a613f85a2?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 items-center py-9 pr-20 pl-9 w-full bg-blue-200 bg-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 whitespace-nowrap">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Sunita</div>
              </div>
              <div className="flex-auto self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                Hindi
              </div>
              <div className="flex gap-4 self-stretch px-0.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6f26dd2dfc7d821d443a694bace1cfaa403d8e2b88aa68d8f00fb968641dd6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1cba793fe3b147129c7b06e6b9d0298567bd896b6b676365054a4db975ab6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94149d0023795abcae375ca0dd03cb4e1ddf2e05b73b5e2899c797b00921d8f6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f2dc0b56d727b4a12096b942e18f99f4b2c6d2ccc1c22e9283b2a9a613f85a2?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 whitespace-nowrap">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Pavan</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                Science
              </div>
              <div className="flex gap-4 self-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6f26dd2dfc7d821d443a694bace1cfaa403d8e2b88aa68d8f00fb968641dd6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b27d64c7c602feb19c5bfbe31ed9ce8405ee6dae99c584755a0958eb181141b?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <div className="shrink-0 self-stretch my-auto w-8 h-8 bg-white rounded border-solid border-[3px] border-sky-950" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f2dc0b56d727b4a12096b942e18f99f4b2c6d2ccc1c22e9283b2a9a613f85a2?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 items-center py-8 pr-20 pl-6 w-full border border-solid bg-blue-200 bg-opacity-20 border-slate-400 border-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-start self-start mt-1.5 text-base font-medium text-indigo-900 whitespace-nowrap">
                <div className="flex gap-4 ml-3.5 border border-solid border-slate-400 border-opacity-20 max-md:ml-2.5">
                  <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                  <div className="my-auto">Smita</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c0cc89974ba5f225e12bfdebafd0d3080a762d90f50ae33ce04e9b6adec293?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="mt-2 aspect-[1.3] w-[13px]"
                />
              </div>
              <div className="flex-auto self-stretch my-auto text-base font-medium text-indigo-900 border border-solid border-slate-400 border-opacity-20">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base border border-solid border-slate-400 border-opacity-20 text-blue-950">
                Female
              </div>
              <div className="flex-auto self-stretch my-auto text-base text-indigo-900 border border-solid border-slate-400 border-opacity-20">
                Social Studies
              </div>
              <div className="flex gap-4 self-start px-px border border-solid border-slate-400 border-opacity-20">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6f26dd2dfc7d821d443a694bace1cfaa403d8e2b88aa68d8f00fb968641dd6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1cba793fe3b147129c7b06e6b9d0298567bd896b6b676365054a4db975ab6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94149d0023795abcae375ca0dd03cb4e1ddf2e05b73b5e2899c797b00921d8f6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab21f3cad4dc6eb63969c7ac61a8f109b0e074ebf4454687a3046b1298dd7f47?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 border border-solid aspect-square border-slate-400 border-opacity-20 stroke-[1px] stroke-slate-400 stroke-opacity-20"
              />
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 whitespace-nowrap">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Raman</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                French
              </div>
              <div className="flex gap-4 self-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6f26dd2dfc7d821d443a694bace1cfaa403d8e2b88aa68d8f00fb968641dd6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1cba793fe3b147129c7b06e6b9d0298567bd896b6b676365054a4db975ab6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94149d0023795abcae375ca0dd03cb4e1ddf2e05b73b5e2899c797b00921d8f6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f2dc0b56d727b4a12096b942e18f99f4b2c6d2ccc1c22e9283b2a9a613f85a2?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between items-start mt-7 mr-10 ml-10 text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="mt-4 text-blue-950">
                <span className="leading-5 text-slate-400">Showing</span>{" "}
                <span className="leading-5 text-blue-950">1-5</span>{" "}
                <span className="leading-5 text-slate-400">from</span>{" "}
                <span className="leading-5 text-blue-950">100</span>{" "}
                <span className="leading-5 text-slate-400">data</span>
              </div>
              <div className="flex gap-4 pr-7 font-bold text-indigo-900 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/949e7c8987021aee2ae47eedf0ec684d0d82a5c28bd120c707344048d2ec1c44?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 my-auto w-8 aspect-square"
                />
                <div className="flex flex-col justify-center text-amber-50">
                  <div className="justify-center items-center px-4 w-10 h-10 bg-rose-600 rounded shadow-lg">
                    1
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="justify-center items-start p-4 rounded border-2 border-amber-300 border-solid">
                    2
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col justify-center">
                    <div className="justify-center items-start p-4 rounded border-2 border-amber-300 border-solid">
                      3
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/36a6724fc60dd81f53e1d7bf0fc1f48c785718e81e6776443c042b2feb9256a8?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 my-auto w-8 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Teacherlist;