// import React, { useEffect, useState } from "react";
// import NGOCard from "../components/NGOCard";
// import axios from "axios"; // or use fetch if you prefer
// import Navbar from "../components/Navbar"; 

// const NGOs = () => {
//   const [ngos, setNgos] = useState([]);

//   useEffect(() => {
//     const fetchNGOs = async () => {
//       try {
//         const response = await axios.get("/api/ngos"); // Adjust API endpoint if necessary
//         setNgos(response.data);
//       } catch (error) {
//         console.error("Error fetching NGOs:", error);
//       }
//     };

//     fetchNGOs();
//   }, []);

//   return (
//     <div className="relative z-0 bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 min-h-screen flex flex-col">
//       {/* Navbar */}
//       <div className="bg-pink-100">
//         <Navbar />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4">NGOs Supporting Women</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {ngos.map((ngo, index) => (
//             <NGOCard key={ngo.id} {...ngo} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NGOs;




import React, { useEffect, useState } from "react";
import NGOCard from "../components/NGOCard";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NGOs = () => {
  const [ngos, setNgos] = useState([]); // State for storing NGOs
  const [searchCity, setSearchCity] = useState(""); // State for search query

  useEffect(() => {
    const fetchNGOs = async () => {
      try {
        // Send the city parameter if there's one; otherwise fetch all NGOs
        const response = await axios.get(`/api/ngos?city=${searchCity}`);
        
        // Replace the state with new data only
        setNgos(response.data); // This clears out the previous cards and sets new ones
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };

    fetchNGOs(); // Trigger fetching when the page loads or searchCity changes
  }, [searchCity]); // Dependency array ensures data fetches again on city search change

  return (
    <div className="relative z-0 bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 min-h-screen flex flex-col">
      <div className="bg-pink-100">
        <Navbar />
      </div>

      {/* Content */}
      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6 text-center">
  NGOs Supporting Women 🌐
</h1>

        
        {/* Search Bar */}
        <input
  type="text"
  placeholder="Search by City"
  className="mb-4 w-1/3 p-3 border border-purple-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
  value={searchCity}
  onChange={(e) => setSearchCity(e.target.value)} // Update searchCity state on input change
/>


        {/* Display NGOs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ngos.length > 0 ? (
            ngos.map((ngo) => (
              <NGOCard key={ngo.id} {...ngo} />
            ))
          ) : (
            <p>No NGOs found for this city.</p>
          )}
        </div>
      </div>
      <div className="relative z-0">
                <Footer />
            </div>
    </div>
  );
};

export default NGOs;


