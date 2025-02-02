
import React from "react"; 
import Carousel from "../../components/Carousel";

import AboutUs from "../../components/AboutUs";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import QuickNavigation from "../../components/QuickNavigation";

function Home() {
  return (
 
    <div className="relative z-0  bg-gradient-to-r from-purple-50 via-pink-50 to-purple-100a">
            <div className="bg-pink-100  bg-center">
                <Navbar/>
                
            </div>
            
            <Carousel/>


            {/* Story Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-12">
        {/* Text Container */}
        <div className="bg-pink-200 p-6 md:w-1/2 rounded-full shadow-lg flex items-center justify-center text-center">
          <p className="text-lg font-semibold text-gray-800">
            She was born into circumstances she couldn't control, forced into a life she never chose. Yet, within the walls of despair, she found the strength to dream. Her story is one of resilience, courage, and the unbreakable human spirit.
          </p>
        </div>
        {/* Image Container */}
        <img src="/images/brothel-woman-1.jpg" alt="A woman with resilience" className="md:w-1/3 w-full rounded-lg shadow-md" />
      </div>

      {/* Story Section 2 (Reversed) */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 px-8 py-12">
        {/* Text Container */}
        <div className="bg-purple-200 p-6 md:w-1/2 rounded-full shadow-lg flex items-center justify-center text-center">
          <p className="text-lg font-semibold text-gray-800">
            With every sunrise, she fought for her freedom, determined to escape the chains of her past. Her journey was painful, yet she refused to be defined by her circumstances. Today, she stands as a beacon of hope for many others.
          </p>
        </div>
        {/* Image Container */}
        <img src="/images/brothel-woman-2.jpg" alt="A woman overcoming struggles" className="md:w-1/3 w-full rounded-lg shadow-md" />
      </div>
            <QuickNavigation/>
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

