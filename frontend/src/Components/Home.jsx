import Mainpage from '../homepage/components/mainpage/mainpage'
import Navbar from '../homepage/components/Navbar/navbar'
import ImageSlider from '../homepage/components/aboutslide/aboutslide'
import Services from '../homepage/components/services/services'
import ImageHover from '../homepage/components/clients/clients'
import Footer from'../homepage/components/Footer/footer';

function Home() {
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

export default Home;
