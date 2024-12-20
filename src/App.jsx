import Navbar from "./components/navbar.jsx"
import Sidebar from "./components/sidebar.jsx"
import Hero from "./components/hero.jsx"
import Featured from "./components/featured.jsx"
import Category from "./components/category.jsx"
import SubCategory from "./components/subcategory.jsx"
import MoreFeatured from "./components/more_featured.jsx"



function App() {
  return (
    <>
      <Navbar />
      <div className="flex gap-[0.03rem]">
        <Sidebar />
        <div className="flex flex-grow flex-col gap-5 w-60">
            <Hero />
            <Featured />
            <Category />
            <SubCategory />
            <MoreFeatured />
        </div>
      </div>
    </>
  )
}

export default App
