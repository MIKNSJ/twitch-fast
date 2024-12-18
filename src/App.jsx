import Navbar from "./components/navbar.jsx"
import Sidebar from "./components/sidebar.jsx"
import Hero from "./components/hero.jsx"
import Featured from "./components/featured.jsx"



function App() {
  return (
    <>
      <Navbar />
      <div className="flex gap-[0.03rem]">
        <Sidebar />
        <div className="flex flex-grow flex-col gap-5 w-60">
            <Hero />
            <Featured />
        </div>
      </div>
    </>
  )
}

export default App
