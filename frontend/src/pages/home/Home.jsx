
import React from "react"; 
import Carousel from "../../components/Carousel";
import AboutUs from "../../components/AboutUs";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Home() {
  return (
 
    <div className="relative z-0  bg-gradient-to-r from-purple-50 via-pink-50 to-purple-100a">
            <div className="bg-pink-100  bg-center">
                <Navbar/>
                
            </div>
            <Carousel/>
            <AboutUs/>
            <Feedback/>
           
           
            
            
            
            <div className="relative z-0">
                <Footer/>
            </div>
        </div>
  );
}

export default Home;



// import React from "react"; 
// import Carousel from "../../components/Carousel";
// import AboutUs from "../../components/AboutUs";
// import Feedback from "../../components/Feedback";
// import Footer from "../../components/Footer";

// function Home() {
//   return (
//     <div className="bg-pink-100 w-full min-h-screen flex flex-col items-center">
//       {/* Wrapper container to handle scrollable content */}
//       <div className="w-full flex-grow overflow-auto">
//         {/* Carousel */}
//         <Carousel />

//         {/* Main content */}
//         <div className="w-full">
//           <AboutUs />
//           <Feedback />
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default Home;

