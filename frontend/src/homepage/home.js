
import Mainpage from './components/mainpage/mainpage'
import Navbar from './components/Navbar/navbar'
import ImageSlider from './components/aboutslide/aboutslide'
import Services from './components/services/services'
import ImageHover from './components/clients/clients'
import Footer from'./components/Footer/footer';

function App() {
  return (
   
      
    <div className="App">
      <Navbar/>
     <Mainpage/>
     <ImageSlider/>
     <Services/> 
     <ImageHover/>
     <Footer/>   
         
     </div>
   

   
  );
}

export default App;
