import Header from "./components/Header.jsx"
import './App.css'
import Search from "./components/Search.jsx"
import Banner from "./components/Banner.jsx"
import Sale_card from "./components/Sale_card.jsx"

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Banner />
      <section className=" container"> 
        <div className="sale_list">
          <Sale_card  para="SALE UP TO 25%" heading="It’s in the Bag: Limited Deals"  />
          <Sale_card  para="SALE UP TO 25%" heading="Make a Statement" />
        </div>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default App