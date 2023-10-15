import Image from "next/image";

export default function Page(){
    return (
<section className="text-gray-400 bg-white body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3 lg:mb-0 mb-4">✨ Join the RYL-SHOP Experience</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-gray-600 text-base">{`At RYL-SHOP, we're more than just a shopping destination; we're a lifestyle. Join us in celebrating the art of fashion, where you can express yourself, find inspiration, and discover your own unique style.
Start shopping now and experience the world of fashion at RYL-SHOP. Your perfect style is just a click away.`}</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://rukminim2.flixcart.com/image/612/612/l2hwwi80/shirt/f/r/d/l-pk19shchex-e-surhi-original-imagdt5qhe669grg.jpeg?q=70"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kurta/l/m/y/3xl-shopsy-m-530227-530230-ethnic-basket-original-imag6yzvfdfxhjcc-bb.jpeg?q=70"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://rukminim2.flixcart.com/image/612/612/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://rukminim2.flixcart.com/image/612/612/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://rukminim2.flixcart.com/image/612/612/kr9jafk0/kurta/e/w/u/m-kr499b-metro-fashion-original-imag537e9whwftd7.jpeg?q=70"/>
        </div>
      </div>
    </div>
  </div>
</section>
   );
}