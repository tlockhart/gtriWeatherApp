const getCurrentForecast = async (stationId) => {
    console.log("Route:", process.env.REACT_APP_API_URL)
    return fetch(`{process.env.REACT_APP_API_URL}/api/weather/${stationId}`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export default getCurrentForecast;
