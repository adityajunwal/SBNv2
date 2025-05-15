// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Box, Button, Typography } from "@mui/material";
// import { FaBus } from "react-icons/fa6";
// import "./Available.css";

// function Availablebuses() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const busNumbers = location.state?.busNumbers || [];

//   console.log("Bus numbers:", busNumbers);
  

//   return (
//     <Box className="available-buses-container">
//       <Typography
//         variant="h5"
//         className="header-text"
//         sx={{
//           fontSize: "40px",
//           fontFamily: "Zilla Slab",
//           marginBottom: "10px",
//         }}
//       >
//         Available buses for Your Location:
//       </Typography>
//       <Box className="button-group">
//         {busNumbers.length > 0 ? (
//           busNumbers.map((bus, index) => (
//             <Button
//               key={index}
//               variant="contained"
//               startIcon={<FaBus />}
//               className="bus-button"
//               sx={{
//                 padding: "10px",
//                 margin: "5px 0",
//                 fontSize: "20px",
//                 fontWeight: 600,
//                 fontFamily: "Konkhmer Sleokchher",
//               }}
//               onClick={() =>
//                 navigate(`/busdetails`, { state: { busNumber: bus } })
//               }
//             >
//               Bus No. {bus}
//             </Button>
//           ))
//         ) : (
//           <Typography>No buses available for this location.</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default Availablebuses;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import { FaBus } from "react-icons/fa6";
import { baseUrl } from "../../../config"; // Adjust the path as needed
import "./Available.css";

function Availablebuses() {
  const location = useLocation();
  const navigate = useNavigate();
  const busNumbers = location.state?.busNumbers || [];

  console.log("Bus numbers:", busNumbers);

  const fetchBusDetails = async (busNumber) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v2/bus/search/number/?bus_number=${busNumber}`
      );
      console.log("Bus details:", response.data);
      navigate("/busdetails", { state: { busDetails: response.data } });
    } catch (err) {
      console.error("Error fetching bus details:", err);
      alert("Failed to fetch bus details. Please try again.");
    }
  };

  return (
    <Box className="available-buses-container">
      <Typography
        variant="h5"
        className="header-text"
        sx={{
          fontSize: "40px",
          fontFamily: "Zilla Slab",
          marginBottom: "10px",
        }}
      >
        Available buses for Your Location:
      </Typography>
      <Box className="button-group">
        {busNumbers.length > 0 ? (
          busNumbers.map((bus, index) => (
            <Button
              key={index}
              variant="contained"
              startIcon={<FaBus />}
              className="bus-button"
              sx={{
                padding: "10px",
                margin: "5px 0",
                fontSize: "20px",
                fontWeight: 600,
                fontFamily: "Konkhmer Sleokchher",
              }}
              onClick={() => fetchBusDetails(bus)}
            >
              Bus No. {bus}
            </Button>
          ))
        ) : (
          <Typography>No buses available for this location.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default Availablebuses;


