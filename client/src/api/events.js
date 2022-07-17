import axios from "axios";

const fetchEvents = async () => {
  try {
    const response = await axios.get("/api/events");
    return response.data?.events;
  } catch (err) {
    return { error: err.response.data.error };
  }
};

const fetchEventsByFilter = async (filtersObj) => {
  try {
    const response = await axios.get("/api/events", { params: filtersObj });
    return response.data?.events;
  } catch (err) {
    return { error: err.response.data.error };
  }
};

export { fetchEvents, fetchEventsByFilter };
