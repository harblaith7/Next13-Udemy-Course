import Link from 'next/link'
import NavBar from '../../../components/NavBar'
import Header from '../components/Header'
import RestaurantNavbar from '../components/RestaurantNavbar'

export default function RestaurantMenu() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
       {/* HEADER */}
        <Header />
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <RestaurantNavbar />
            {/* RESAURANT NAVBAR */} {/* MENU */}
            <main className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <div className=" border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">Siomai</h3>
                    <p className="font-light mt-1 text-sm">
                      Chinese dumpling that Filipinos find irresistible because
                      of its chunky and flavorful filling. It is popular because
                      of the dough wrapper, which is filled with ground beef,
                      shrimp, or pork.
                    </p>
                    <p className="mt-7">$50.00</p>
                  </div>
                  {/* MENU CARD */}
                </div>
              </div>
            </main>
            {/* MENU */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  )
}
