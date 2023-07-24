import Link from "next/link"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import RestaurantCard from "./components/Card"
import NavBar from "../components/NavBar"

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* HEADER */}
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <Sidebar />
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <RestaurantCard />
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  )
}
