// import {
//   Box,
//   Button,
//   InputAdornment,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import "./Busdetails.css";
// import { FaBus } from "react-icons/fa6";
// import { useLocation } from "react-router-dom";

// function Busdetails() {
//   const [isRouteTable, setisRouteTable] = useState(true);
//   const location = useLocation();
//     const busDetails = location.state?.busDetails;

//   const busStops = [
//     { stop: "Bus Stop #1", firstShift: "07:15", secondShift: "09:00" },
//     { stop: "Bus Stop #2", firstShift: "07:25", secondShift: "09:10" },
//     { stop: "Bus Stop #3", firstShift: "07:35", secondShift: "09:20" },
//     { stop: "Bus Stop #4", firstShift: "07:45", secondShift: "09:30" },
//     { stop: "Bus Stop #5", firstShift: "07:55", secondShift: "09:40" },
//     { stop: "Bus Stop #6", firstShift: "08:05", secondShift: "09:50" },
//     { stop: "Bus Stop #7", firstShift: "08:15", secondShift: "10:00" },
//     { stop: "Bus Stop #8", firstShift: "08:25", secondShift: "10:10" },
//     { stop: "Bus Stop #9", firstShift: "08:35", secondShift: "10:20" },
//     { stop: "Bus Stop #10", firstShift: "08:45", secondShift: "10:30" },
//     { stop: "SAGE Indore", firstShift: "08:55", secondShift: "10:40" },
//   ];

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
//         Bus Details
//       </Typography>

//       <TextField
//         variant="outlined"
//         placeholder="Selected Bus Number"
//         sx={{ margin: "20px 20px", width: "80%" }}
//         className="location-input"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <FaBus className="location-icon" />
//             </InputAdornment>
//           ),
//         }}
//       />

//       <div className="search-options">
//         <Button
//           variant={isRouteTable ? "contained" : "outlined"}
//           sx={{
//             textTransform: "none",
//             width: "140px",
//             marginRight: "15px",
//             borderColor: "white",
//             color: isRouteTable ? "black" : "white",
//             backgroundColor: isRouteTable ? "white" : "transparent",
//             "&:hover": {
//               borderColor: "white",
//               backgroundColor: isRouteTable
//                 ? "white"
//                 : "rgba(255, 255, 255, 0.1)",
//             },
//           }}
//           onClick={() => setisRouteTable(true)}
//           className="tab-button"
//         >
//           Route Table
//         </Button>
//         <Button
//           variant={isRouteTable ? "outlined" : "contained"}
//           sx={{
//             textTransform: "none",
//             borderColor: "white",
//             color: isRouteTable ? "white" : "black",
//             backgroundColor: isRouteTable ? "transparent" : "white",
//             "&:hover": {
//               borderColor: "white",
//               backgroundColor: isRouteTable
//                 ? "rgba(255, 255, 255, 0.1)"
//                 : "white",
//             },
//           }}
//           onClick={() => setisRouteTable(false)}
//           className="tab-button"
//         >
//           Route Map
//         </Button>
//       </div>

//       {isRouteTable && (
//         <Box className="route-box-wrapper">
//           {/* Header Row */}
//           <Box className="route-row header">
//             <Box className="route-cell">S. No.</Box>
//             <Box className="route-cell">Bus Stop</Box>
//             <Box className="route-cell">First Shift</Box>
//             <Box className="route-cell">Second Shift</Box>
//           </Box>

//           {/* Dynamic Rows */}
//           {busStops.map((stop, index) => (
//             <Box className="route-row" key={index}>
//               <Box className="route-cell">{index + 1}</Box>
//               <Box className="route-cell">{stop.stop}</Box>
//               <Box className="route-cell">{stop.firstShift}</Box>
//               <Box className="route-cell">{stop.secondShift}</Box>
//             </Box>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Busdetails;



import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FaBus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import "./Busdetails.css";

function Busdetails() {
  const [isRouteTable, setIsRouteTable] = useState(true);
  const location = useLocation();
  const busDetails = location.state?.busDetails;

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
        Bus Details
      </Typography>

      {busDetails ? (
        <>
          <TextField
            variant="outlined"
            value={`Bus Number: ${busDetails.busNumber}`}
            disabled
            sx={{ margin: "20px 20px", width: "80%" ,backgroundColor:"white", borderRadius:"5px",color:"black"}}
            className="location-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaBus className="location-icon" />
                </InputAdornment>
              ),
            }}
          />

          <div className="search-options">
            <Button
              variant={isRouteTable ? "contained" : "outlined"}
              sx={{
                textTransform: "none",
                width: "140px",
                marginRight: "15px",
                borderColor: "white",
                color: isRouteTable ? "black" : "white",
                backgroundColor: isRouteTable ? "white" : "transparent",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: isRouteTable
                    ? "white"
                    : "rgba(255, 255, 255, 0.1)",
                },
              }}
              onClick={() => setIsRouteTable(true)}
              className="tab-button"
            >
              Route Table
            </Button>
            <Button
              variant={isRouteTable ? "outlined" : "contained"}
              sx={{
                textTransform: "none",
                borderColor: "white",
                color: isRouteTable ? "white" : "black",
                backgroundColor: isRouteTable ? "transparent" : "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: isRouteTable
                    ? "rgba(255, 255, 255, 0.1)"
                    : "white",
                },
              }}
              onClick={() => setIsRouteTable(false)}
              className="tab-button"
            >
              Route Map
            </Button>
          </div>

          {isRouteTable ? (
            <Box className="route-box-wrapper">
              <Box className="route-row header">
                <Box className="route-cell">S. No.</Box>
                <Box className="route-cell">Bus Stop</Box>
                <Box className="route-cell">First Shift</Box>
                <Box className="route-cell">Second Shift</Box>
              </Box>
              {busDetails.routeTable.map((stop, index) => (
                <Box className="route-row" key={index}>
                  <Box className="route-cell">{stop.serialNumber}</Box>
                  <Box className="route-cell">{stop.busStop}</Box>
                  <Box className="route-cell">{stop.timing1}</Box>
                  <Box className="route-cell">{stop.timing2}</Box>
                </Box>
              ))}
            </Box>
          ) : (
            <iframe
              src={busDetails.routeMap}
              title="Route Map"
              style={{ width: "100%", height: "400px", border: "none" }}
            />
          )}
        </>
      ) : (
        <Typography variant="h6">No bus details found.</Typography>
      )}
    </Box>
  );
}

export default Busdetails;




 
// import { Box, TextField, Typography,Button } from "@mui/material";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// function Busdetails() {
//   const location = useLocation();
//   const busDetails = location.state?.busDetails;

//   const [isRouteTable, setIsRouteTable] = useState(true);

//   return (
//     <Box className="available-buses-container">
//       <Typography variant="h5" className="header-text">
//         Bus Details
//       </Typography>

//       {busDetails ? (
//         <>
//           <TextField
//             variant="outlined"
//             value={`Bus Number: ${busDetails.busNumber}`}
//             disabled
//             sx={{ margin: "20px 20px", width: "80%" }}
//           />
//           <div className="search-options">
//             <Button
//               variant={isRouteTable ? "contained" : "outlined"}
//               onClick={() => setIsRouteTable(true)}
//             >
//               Route Table
//             </Button>
//             <Button
//               variant={isRouteTable ? "outlined" : "contained"}
//               onClick={() => setIsRouteTable(false)}
//             >
//               Route Map
//             </Button>
//           </div>

//           {isRouteTable ? (
//             <Box>
//               <Box className="route-row header">
//                 <Box className="route-cell">S. No.</Box>
//                 <Box className="route-cell">Bus Stop</Box>
//                 <Box className="route-cell">Timing 1</Box>
//                 <Box className="route-cell">Timing 2</Box>
//               </Box>
//               {busDetails.routeTable.map((stop, index) => (
//                 <Box className="route-row" key={index}>
//                   <Box className="route-cell">{stop.serialNumber}</Box>
//                   <Box className="route-cell">{stop.busStop}</Box>
//                   <Box className="route-cell">{stop.timing1}</Box>
//                   <Box className="route-cell">{stop.timing2}</Box>
//                 </Box>
//               ))}
//             </Box>
//           ) : (
//             <iframe
//               src={busDetails.routeMap}
//               title="Route Map"
//               style={{ width: "100%", height: "400px", border: "none" }}
//             />
//           )}
//         </>
//       ) : (
//         <Typography variant="h6">No bus details found.</Typography>
//       )}
//     </Box>
//   );
// }

// export default Busdetails;

