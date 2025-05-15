import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Button, TextField, InputAdornment, Autocomplete } from "@mui/material";
import { FaBus, FaLocationDot } from "react-icons/fa6";
import { baseUrl } from "../../../config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isWithLocation, setIsWithLocation] = useState(true);
  const [busNumber, setBusNumber] = useState(""); 
  const [searchResult, setSearchResult] = useState(null); 
  const [error, setError] = useState(null); 
  const [location, setLocation] = useState("");
  const [stops, setStops] = useState([]);
   
  const navigate = useNavigate();
  const handleSearchByBusNumber = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v2/bus/search/number/?bus_number=${busNumber}`
      );
      setSearchResult(response.data);
      setError(null);
       navigate("/busdetails", { state: { busDetails: response.data } });
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch bus details. Please try again.");
    }
  };
useEffect(() => {
  const fetchStops = async () => {
    try {
      const response = await axios.get(
        "https://sagebusnavigatorv2.vercel.app/api/v2/bus/stops/"
      );
      const sortedStops = response.data
        .filter((stop) => stop)
        .sort((a, b) => a.localeCompare(b));
      setStops(sortedStops);
    } catch (err) {
      console.error("Error fetching stops:", err);
      setError("Failed to fetch stops. Please try again.");
    }
  };

  fetchStops();
}, []);

  const handleSearchByLocation = async () => {
    try {
      const upperCaseLocation = location.toUpperCase();

      const response = await axios.get(
        `${baseUrl}/api/v2/bus/search/stop/?stop_name=${encodeURIComponent(
          upperCaseLocation
        )}`
      );

      console.log("API Response:", response.data);
      const busNumbers = response.data.map((bus) => bus.busNumber);

      console.log("Extracted Bus Numbers:", busNumbers);

      navigate("/availablebuses", { state: { busNumbers } });
    } catch (err) {
      console.error("Error fetching location data:", err);
      setError("Failed to fetch bus details. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <div className="header">
          <h1>Search Your Bus!</h1>
        </div>
        <div className="search-options">
          <Button
            variant={isWithLocation ? "contained" : "outlined"}
            sx={{
              textTransform: "none",
              borderColor: "white",
              color: isWithLocation ? "black" : "white",
              backgroundColor: isWithLocation ? "white" : "transparent",
              "&:hover": {
                borderColor: "white",
                backgroundColor: isWithLocation
                  ? "white"
                  : "rgba(255, 255, 255, 0.1)",
              },
            }}
            onClick={() => setIsWithLocation(true)}
            className="tab-button"
          >
            With Location
          </Button>
          <Button
            variant={isWithLocation ? "outlined" : "contained"}
            sx={{
              textTransform: "none",
              borderColor: "white",
              color: isWithLocation ? "white" : "black",
              backgroundColor: isWithLocation ? "transparent" : "white",
              "&:hover": {
                borderColor: "white",
                backgroundColor: isWithLocation
                  ? "rgba(255, 255, 255, 0.1)"
                  : "white",
              },
            }}
            onClick={() => setIsWithLocation(false)}
            className="tab-button"
          >
            With Bus Number
          </Button>
        </div>

        <div className="input-group">
          {isWithLocation ? (
            <Autocomplete
              options={stops}
              getOptionLabel={(option) => option}
              value={location}
              onChange={(event, newValue) => setLocation(newValue || "")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  className="input-field"
                  placeholder="Enter your Location"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLocationDot />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          ) : (
            <TextField
              variant="outlined"
              placeholder="Enter Bus Number"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              fullWidth
              className="input-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaBus />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#40FF00",
              color: "#000",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#36E000",
              },
            }}
            onClick={
              isWithLocation ? handleSearchByLocation : handleSearchByBusNumber
            }
            fullWidth
          >
            {isWithLocation ? "Get Routes" : "Search for Buses"}
          </Button>
        </div>
        {searchResult && (
          <div className="search-result">
            <h3>Search Results:</h3>
            <pre>{JSON.stringify(searchResult, null, 2)}</pre>
          </div>
        )}
        {error && <div className="error">{error}</div>}

        
      </div>
     
    </div>
  );
};

export default Home;


