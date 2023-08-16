import Image from "next/image"
import event1 from "/public/event1.webp"
import event2 from "/public/event2.webp"
import event3 from "/public/event3.webp"

const ProductType = () => {
  return (
    <div className="py-16 px-2">
      <div className="text-center  space-y-3">
        <p className="text-blue-800 font-extrabold text-sm">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
      </div>
      {/* grid*/}
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6 text-gray-800">
        {/*first grid*/}
        <div className="w-full md:col-span-2 flex flex-col sm:flex-row bg-gray-400 px-12 items-center col-span-1 justify-between  ">
          <div className=" max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className="text-xl ">For the summer season</p>
          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="summer season" src={event1} />
          </div>
        </div>
        {/*second grid*/}
        <div className="w-full md:row-span-2 flex flex-col  items-center row-span-1 h-full bg-purple-400 " >
          <div className="p-4 ">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00 </del>
              &nbsp;&nbsp;&nbsp;
              <b >
                <ins>$75.00</ins>
              </b>
            </p>

          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="sweaters" src={event2} />
          </div>
        </div>
        {/*third grid*/}
        <div className="w-full md:row-span-2 row-span-1 flex flex-col  items-center h-full bg-zinc-300" >
          <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p className="text-lg">
              <del>$225.00</del>
              &nbsp;&nbsp;&nbsp;
              <b >
                <ins>$190.00</ins>
              </b>
            </p>

          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="sweaters" src={event3} />
          </div>
        </div>
        {/*forth grid*/}
        <div className="py-9 text-white w-full md:col-span-2 col-auto  bg-black flex flex-col justify-center items-center space-y-3 " >

          <h3 className="font-extrabold text-4xl" >GET 30% Off</h3>
          <p className="">USE PROMO CODE</p>
          <button
            aria-label="Redirect user at Dine Week End Sale"
            className="py-1 px-8 text-lg font-medium bg-gray-600 rounded-lg tracking-widest"
          >DINEWEEKENDSALE</button>
        </div>

      </div>
    </div >

  )
}

export default ProductType