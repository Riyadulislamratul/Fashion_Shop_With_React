import Header from "./components/Header.jsx"
import './App.css'
import Search from "./components/Search.jsx"
import Banner from "./components/Banner.jsx"
import Sale_card from "./components/Sale_card.jsx"
import Mini_card from "./components/Mini_card.jsx"
import truck from "./assets/truck.png"
import payment from "./assets/payment.png"
import call from "./assets/call.png"
import gift from "./assets/gift.png"

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
      <section className="container">
        <div className="mini_cards">
          <Mini_card img={truck} heading="Free Shipping" para="For all Orders Over $100" />
          <Mini_card img={payment} heading="Secured Payment" para="Payment Cards Accepted" />
          <Mini_card img={call} heading="30 Days Returns" para="For an Exchange Product" />
          <Mini_card img={gift} heading="24/7 Support" para="Contact us Anytime" />
        </div>
      </section>
    </>
  )
}

export default App