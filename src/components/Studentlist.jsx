import * as React from "react";

function Studentlist() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <div className="flex flex-col justify-center w-full bg-sky-950 max-md:max-w-full" />
      <div className="flex flex-col self-center py-20 pr-20 mt-9 w-full rounded bg-blue-200 bg-opacity-20 max-w-[1720px] max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col self-center mt-5 w-full font-medium max-w-[1478px] max-md:max-w-full">
          <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto self-start mt-2.5 text-3xl text-sky-950">
              NURSERY - A
            </div>
            <div className="flex gap-0 text-lg text-rose-600 max-md:flex-wrap">
              <div className="flex flex-col justify-center px-6 py-4 bg-white rounded border border-rose-600 border-solid shadow-2xl max-md:px-5">
                <div className="flex gap-4 py-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ee532c452b65a16f93ceb9338d46049eb2caf3280078f090cf83b7a5ff15f4?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 aspect-[1.06] fill-rose-600 w-[17px]"
                  />
                  <div className="flex-auto">New Student</div>
                </div>
              </div>
              <div className="justify-center px-11 py-4 bg-white border border-rose-600 border-solid shadow-2xl max-md:px-5">
                Import CSV
              </div>
              <div className="flex flex-col justify-center px-8 py-4 whitespace-nowrap bg-white rounded-none border border-rose-600 border-solid shadow-2xl max-md:px-5">
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
          </div>
          <div className="flex gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-auto gap-5 justify-end py-6 pr-9 pl-20 text-2xl bg-white rounded shadow-2xl text-sky-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex-auto">Class Coordinator</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae06430af01320f5430a1ac2b3f5ff0313ad1ce849268673bff4e768fe6463b6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 my-auto w-4 aspect-[2] fill-sky-950 fill-opacity-30"
              />
            </div>
            <div className="flex flex-auto gap-3 text-lg text-slate-400 max-md:flex-wrap max-md:max-w-full">
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e76d4d72d68d2ad4c35f2227992fc796d750093cd063bd440074b4e49127c1?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <div className="my-auto">Search here...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-start px-16 mt-14 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col px-0.5 pt-11 pb-5 w-full bg-white rounded max-w-[1475px] max-md:max-w-full">
            <div className="flex gap-5 self-center w-full text-lg font-bold text-indigo-900 max-w-[1314px] max-md:flex-wrap max-md:max-w-full">
              <div>Name</div>
              <div>ID</div>
              <div>Gender</div>
              <div className="flex-auto">Parent Name</div>
              <div>Contact</div>
              <div>Action</div>
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 mt-10 w-full bg-blue-100 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-stone-900">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Mahi Sharma</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Female
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                ABC
              </div>
              <div className="flex gap-4 self-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d29e010785ad3545e236be9635a6f2fcb17e0cf329a6a6cb1331d8206c82daf?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/14b7a812e2912b03b4f06c95ee8aef4d31ba4462407bd820266052469caaae11?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Tony Sharma</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                XYZ
              </div>
              <div className="flex gap-4 self-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4471486bc24afc72d32110a20b33f3fef6d2313d2780f97feed53ff11c2c224?apiKey=5571847fc48447bbad48faecb3b890d9&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/11cd8af69af68b6f85eb9d3af450dca7cf6045934053295a66bfcc55c3ff858d?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-blue-100 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 bg-blue-100 bg-opacity-50">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Karan </div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-blue-950">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                DEF
              </div>
              <div className="flex gap-4 self-stretch bg-blue-100 bg-opacity-50">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24045c0b946b417f55cbcf446c600ca9b0d0940a45ffb69dd6fda6d3d674436b?apiKey=5571847fc48447bbad48faecb3b890d9&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb975b0403fd8ab558943f7ccd741723599ee289ca89fa79c3ad757085e69eea?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square fill-blue-100 fill-opacity-50"
              />
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 whitespace-nowrap">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Ravi</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                GHI
              </div>
              <div className="flex gap-4 self-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24045c0b946b417f55cbcf446c600ca9b0d0940a45ffb69dd6fda6d3d674436b?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b27d64c7c602feb19c5bfbe31ed9ce8405ee6dae99c584755a0958eb181141b?apiKey=5571847fc48447bbad48faecb3b890d9&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9bd56cfebf4398a588c6085dc8d0ec1b11bdbcf1beca7c45f15afd5c468af0?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-blue-100 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 whitespace-nowrap bg-blue-100 bg-opacity-50">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Neha</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-blue-950">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Female
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                JKL
              </div>
              <div className="flex gap-4 self-stretch bg-blue-100 bg-opacity-50">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24045c0b946b417f55cbcf446c600ca9b0d0940a45ffb69dd6fda6d3d674436b?apiKey=5571847fc48447bbad48faecb3b890d9&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb975b0403fd8ab558943f7ccd741723599ee289ca89fa79c3ad757085e69eea?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square fill-blue-100 fill-opacity-50"
              />
            </div>
            <div className="flex gap-5 justify-between items-center py-9 pr-20 pl-9 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 self-stretch my-auto text-base font-medium text-indigo-900 whitespace-nowrap">
                <div className="shrink-0 bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                <div className="my-auto">Rohan</div>
              </div>
              <div className="self-stretch my-auto text-base font-medium text-indigo-900">
                #123456789
              </div>
              <div className="self-stretch my-auto text-base text-blue-950">
                Male
              </div>
              <div className="self-stretch my-auto text-base text-indigo-900">
                MNO
              </div>
              <div className="flex gap-4 self-stretch">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24045c0b946b417f55cbcf446c600ca9b0d0940a45ffb69dd6fda6d3d674436b?apiKey=5571847fc48447bbad48faecb3b890d9&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9bd56cfebf4398a588c6085dc8d0ec1b11bdbcf1beca7c45f15afd5c468af0?apiKey=5571847fc48447bbad48faecb3b890d9&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between items-start mt-9 mr-10 ml-10 text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd66454d00a3ed211a49e1e1fbb5dd8a231936689ed5ec33a730ab62856853a5?apiKey=5571847fc48447bbad48faecb3b890d9&"
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/734ee822d95593138c7476185b49cb4d5e38ec5e677e07530697eac8f74879ea?apiKey=5571847fc48447bbad48faecb3b890d9&"
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


export default Studentlist;