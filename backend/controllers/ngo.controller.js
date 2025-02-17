// import axios from "axios";
// import dotenv from "dotenv";
// import NGO from "../models/ngo.model.js";

// dotenv.config();

// // Fetch NGOs
// export const ngoController = async (req, res) => {
//     try {
//         let ngos = await NGO.find();
//         if (ngos.length === 0) {
//             ngos = await NGO.insertMany([
//                 {
                    
//                     name: "Shine Patrick Education Welfare Society",
//                     address: "Near By Metro Pillar No 799, Vipin Garden, Uttam Nagar, Delhi",
//                     city:"Delhi",
//                     images: [
//                       "https://content.jdmagicbox.com/v2/comp/delhi/c3/011pxx11.xx11.170603163847.n4c3/catalogue/shine-patrick-education-welfare-society-delhi-6xcx0-250.jpg?w=640&q=75",
//                       "https://content.jdmagicbox.com/v2/comp/delhi/c3/011pxx11.xx11.170603163847.n4c3/catalogue/shine-patrick-education-welfare-society-delhi-tpdd4-250.jpg?w=640&q=75",
//                     ],
//                     link: "https://www.justdial.com/Delhi/Shine-Patrick-Education-Welfare-Society-Near-By-Metro-Pillar-No-799-Vipin-Garden-uttam-Nagar/011PXX11-XX11-170603163847-N4C3_BZDET",
//                   },
//             ]);
//         }
//         res.status(200).json(ngos);
//     } catch (error) {
//         console.error("Error fetching NGOs:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export default ngoController;



// import axios from "axios";
// import dotenv from "dotenv";
// import NGO from "../models/ngo.model.js";

// dotenv.config();

// // Fetch NGOs
// export const ngoController = async (req, res) => {
//   try {
//     let { city } = req.query; // Get city from query params

//     let ngos;
//     if (city) {
//       // Case-insensitive search for city
//       ngos = await NGO.find({ city: { $regex: city, $options: "i" } });
//     } else {
//       // If no city is provided, fetch all NGOs
//       ngos = await NGO.find();
//     }

//     // If no NGOs are found, return an empty array instead of inserting new data
//     if (ngos.length === 0) {
//       return res.status(200).json([]); // No data found
//     }

//     res.status(200).json(ngos);
//   } catch (error) {
//     console.error("Error fetching NGOs:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export default ngoController;



import axios from "axios";
import dotenv from "dotenv";
import NGO from "../models/ngo.model.js";

dotenv.config();

// Fetch NGOs
export const ngoController = async (req, res) => {
  try {
    let { city } = req.query; // Get city from query params

    let ngos;
    if (city) {
      ngos = await NGO.find({ city: { $regex: city, $options: "i" } });
    } else {
      ngos = await NGO.find();
    }

    if (ngos.length === 0) {
      // Only insert default data if the database is completely empty
      const existingNgos = await NGO.countDocuments(); // Check for existing NGOs
      if (existingNgos === 0) {
        const defaultData = [
            {
                name: "Kat Katha",
                address: "Shah Ganj, Ajmeri Gate , New Delhi-110006",
                city: "Delhi",
                images: [
                  "https://www.kat-katha.org/wp-content/uploads/2021/06/OUR-STORY.jpg",
                  "https://www.kat-katha.org/wp-content/uploads/2021/06/OUR-STORY.jpg",
                ],
                link: "https://www.kat-katha.org/",
              },
          {
            name: "Shine Patrick Education Welfare Society",
            address: "Near By Metro Pillar No 799, Vipin Garden, Uttam Nagar, Delhi",
            city: "Delhi",
            images: [
              "https://en-media.thebetterindia.com/uploads/2024/04/kranti1-1713281048.jpg",
              "https://en-media.thebetterindia.com/uploads/2024/04/kranti1-1713281048.jpg",
            ],
            link: "https://www.justdial.com/Delhi/Shine-Patrick-Education-Welfare-Society-Near-By-Metro-Pillar-No-799-Vipin-Garden-uttam-Nagar/011PXX11-XX11-170603163847-N4C3_BZDET",
          },
          {
            name: "Muskan Ek Pahal Sangh",
            address: "VPO Sikanderpur Badha, Sector 84, Gurgaon - 122004 (Near Shappire Mall)",
            city: "Gurgaon",
            images: [
              "https://allianceindia.org/wp-content/uploads/2013/12/Keeping-Violence-at-Bay-in-Andhra-Pradesh_-International-Day-to-End-Violence-against-Sex-Workers_16.12.13.jpg",
              "https://allianceindia.org/wp-content/uploads/2013/12/Keeping-Violence-at-Bay-in-Andhra-Pradesh_-International-Day-to-End-Violence-against-Sex-Workers_16.12.13.jpg",
            ],
            link: "https://www.justdial.com/Gurgaon/Muskan-Ek-Pahal-Sangh-Near-Shappire-Mall-Sector-84/011PXX11-XX11-190501114902-N8R5_BZDET?trkid=70301-delhi-fcat&term=NGOS%20For%20brothel%20%20Women&ncatid=11205643&area=&search=Popular%20NGOS%20For%20Women%20in%20Delhi&mncatname=NGOS%20For%20Women&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
          },
          {
            name: "Khushi Foundation",
            address: "Plot Number 392, Flat Number UG 1, Vaishali Sector 4, Ghaziabad - 201010",
            city: "Ghaziabad",
            images: [
              "https://indiahivaidsalliance.wordpress.com/wp-content/uploads/2014/02/abhayablog.jpg",
              "https://indiahivaidsalliance.wordpress.com/wp-content/uploads/2014/02/abhayablog.jpg",
            ],
            link: "https://www.justdial.com/Ghaziabad/International-Human-Rights-Protection-Council-DAV-Century-Ramprastha/011PXX11-XX11-170907150921-C5T5_BZDET?trkid=&term=&ncatid=11205643&area=&search=Popular%20NGOS%20For%20Women%20in%20Delhi&mncatname=NGOS%20For%20Women&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
          },
          {
            name: "Kdi Future Foundation",
            address: "41/1H/5, Tiljala Road, Govinda Khatick Road, Kolkata - 700046 (Near 4 No Bridge)",
            city: "Kolkata",
            images: [
              "https://indiahivaidsalliance.wordpress.com/wp-content/uploads/2013/12/nandineeblog_swviolence.jpg",
              "https://indiahivaidsalliance.wordpress.com/wp-content/uploads/2013/12/nandineeblog_swviolence.jpg",
            ],
            link: "https://www.justdial.com/Kolkata/Kdi-Future-Foundation-Near-4-No-Bridge-Govinda-Khatick-Road/033PXX33-XX33-200304121113-T7Y9_BZDET?trkid=72418-kolkata-fcat&term=NGOS%20For%20Women%20Facing%20Sexual%20Harassment&ncatid=12058634&area=&search=NGOS%20For%20Women%20Facing%20Sexual%20Harassment%20in%20Kolkata&mncatname=NGOS%20For%20Women%20Facing%20Sexual%20Harassment&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
          },
          {
            name: "Akshara Centre",
            address: "Dhuru Biulding, 2nd Floor, Gokhale Road, Dadar West, Mumbai - 400028 (Opposite Bank Of)",
            city: "Mumbai",
            images: [
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSw4u-K_Nrhsh5f2u9YpK_h-oU_Jjy_Q20Ccf1NxTR4kMct4Ztj",
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSw4u-K_Nrhsh5f2u9YpK_h-oU_Jjy_Q20Ccf1NxTR4kMct4Ztj",
            ],
            link: "https://www.justdial.com/Mumbai/Akshara-Centre-Opposite-Bank-Of-Dadar-West/022PXX22-XX22-180630210526-Q4A2_BZDET?trkid=72418-kolkata&term=NGOS%20For%20Women&ncatid=12058634&area=&search=Popular%20Ngos%20For%20Women%20Facing%20Sexual%20Harassment%20in%20Mumbai&mncatname=NGOS%20For%20Women%20Facing%20Sexual%20Harassment&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
          },

          {
            name: "Helping Hands",
            address: "No-7A, Mahendra Roy Lane, Topsia Road-Govinda Khatick Road, Kolkata - 700046 (Near Auxilium Paris Church)",
            city: "Kolkata",
            images: [
              "https://static4.businessinsider.com/image/5456ae4b69bedde8721dfe1a-1200-800/rtr26efd.jpg",
              "https://static4.businessinsider.com/image/5456ae4b69bedde8721dfe1a-1200-800/rtr26efd.jpg",
            ],
            link: "https://www.justdial.com/Kolkata/Helping-Hands-Near-Auxilium-Paris-Church-Topsia-Road-Govinda-Khatick-Road/033PXX33-XX33-180920205003-V7P4_BZDET?trkid=72139-kolkata-fcat&term=NGOS%20For%20Women&ncatid=11205643&area=&search=Popular%20Ngos%20For%20Women%20in%20Kolkata&mncatname=NGOS%20For%20Women&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
          },

          {
            name: "Aarna Foundation",
            address: "Gulmohar Society Shop No 1 Sankalp School, Opp to Aai Mata Mandir Patilwada, Thane West, Thane - 400606 (SAVARKAR NAGAR, Thane West)",
            city:"Mumbai",
            images: [
              "https://assets.telegraphindia.com/telegraph/2022/Jan/1641588296_08metrtrain1_5c.jpg",
              "https://assets.telegraphindia.com/telegraph/2022/Jan/1641588296_08metrtrain1_5c.jpg",
            ],
            link: "https://www.justdial.com/Thane/Aarna-Foundation-SAVARKAR-NAGAR-Thane-West-Thane-West/022PXX22-XX22-160603173703-C6F1_BZDET?trkid=73031-mumbai-fcat&term=NGOS%20For%20Women&ncatid=11205643&area=&search=Popular%20Ngos%20For%20Women%20in%20Mumbai&mncatname=NGOS%20For%20Women&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
          },
        ];

        // Insert default data only if no NGOs exist
        await NGO.insertMany(defaultData);
        ngos = await NGO.find(); // Fetch the default data after insertion
      } else {
        ngos = []; // No data available, but don't insert dummy data
      }
    }

    res.status(200).json(ngos);
  } catch (error) {
    console.error("Error fetching NGOs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default ngoController;


