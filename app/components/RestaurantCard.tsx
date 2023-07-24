import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="w-64 text-black h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/chingchong">
        <img
          src="https://cdn.vox-cdn.com/thumbor/x9nu3F5vr1oyidy2YtVDesqAArY=/0x0:5184x3456/1200x675/filters:focal(2178x1314:3006x2142)/cdn.vox-cdn.com/uploads/chorus_image/image/64023001/IMG_1540__1_.0.jpg"
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Chingchong</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">Binondo</p>
            <p className="mr-3">$$$$</p>
            <p>Philippines</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  )
}
