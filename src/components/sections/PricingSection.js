import React from 'react'

const PricingSection = () => {
  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);\n"
    }}
  />
    <div className="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">Pricing</h1>
        <h3 className="text-xl font-medium mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          dignissimos laboriosam odit accusamus porro
        </h3>
      </div>
      <div className="w-full md:flex mb-5">
        <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4">PERSONAL</h2>
            <h3 className="text-center font-bold text-4xl mb-2">
              $5<s2an className="text-lg">/mo</s2an>
            </h3>
            <p className="text-center font-bold mb-5">
              <a
                href="#"
                className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block"
              >
                Read more
                <i className="mdi mdi-arrow-right-thick ml-1" />
              </a>
            </p>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Lorem ipsum
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Dolor sit amet
              </li>
            </ul>
          </div>
          <div className="w-full">
            <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:my-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4">TEAM</h2>
            <h3 className="text-center font-bold text-3xl md:text-4xl mb-2">
              $15<span className="text-lg">/mo</span>
            </h3>
            <p className="text-center font-bold mb-5">
              <a
                href="#"
                className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block"
              >
                Read more
                <i className="mdi mdi-arrow-right-thick ml-1" />
              </a>
            </p>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Lorem ipsum
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Dolor sit amet
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Consectetur
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Adipisicing
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Elit repellat
              </li>
            </ul>
          </div>
          <div className="w-full">
            <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4">PRO</h2>
            <h3 className="text-center font-bold text-4xl md:text-5xl mb-2">
              $35<span className="text-lg">/mo</span>
            </h3>
            <p className="text-center font-bold mb-5">
              <a
                href="#"
                className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block"
              >
                Read more
                <i className="mdi mdi-arrow-right-thick ml-1" />
              </a>
            </p>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Lorem ipsum
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Dolor sit amet
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Consectetur
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Adipisicing
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Much more...
              </li>
            </ul>
          </div>
          <div className="w-full">
            <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-3 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center text-3xl font-bold uppercase mb-2">
              ENTERPRISE
            </h2>
            <p className="text-center font-bold mb-5">
              <a
                href="#"
                className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block"
              >
                Read more
                <i className="mdi mdi-arrow-right-thick ml-1" />
              </a>
            </p>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Lorem ipsum
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Consectetur
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Adipisicing
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Sed do eiusmod
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Aliquip ex
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Excepteur
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg" /> Dolor sit amet*
              </li>
            </ul>
          </div>
          <div className="w-full">
            <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
      <div className="text-center max-w-xl mx-auto">
        <p className="text-xs leading-tight">
          *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          eligendi officiis, impedit ducimus eaque a corporis, dolore quia
          officia quam tenetur suscipit dolores, quos, quaerat quo provident
          iusto. Eius, impedit!
        </p>
      </div>
    </div>
</>

  )
}

export default PricingSection