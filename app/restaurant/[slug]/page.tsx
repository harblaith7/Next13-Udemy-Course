import NavBar from '../../components/NavBar'
import Description from './components/Description'
import Header from './components/Header'
import Images from './components/Images'
import Rating from './components/Rating'
import Reservation from './components/Reservation'
import RestaurantNavbar from './components/RestaurantNavbar'
import Reviews from './components/Reviews'
import Title from './components/Title'

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavbar />
              <Title />
              <Rating />
              <Description />
            {/* IMAGES */}
              <Images />
            {/* IMAGES */}
            {/* REVIEWS */}
              <Reviews />
            {/* REVIEWS */}
          </div>
        {/* RESERVATION CARD */}
        <Reservation />
        </div>

      </main>
    </main>
  )
}
