import { useState, useEffect } from "react";

import { fetchEvents, fetchEventsByFilter } from "../api/events";
import { sortEvents } from "../utils";
import SortByDropdown from "./SortByDropdown";
import FiltersModal from "./FiltersModal";
import Events from "./Events/Events";
import Spinner from "./UI/Spinner";
import Button from "./UI/Button";
import Alert from "./UI/Alert";

const defaultSort = "start ascending";

function Home() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [sortBy, setSortBy] = useState(defaultSort);

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetchEvents();
      if (response.error) {
        setError(response.error);
        setLoading(false);
        return;
      }

      const sortedEvents = sortEvents(defaultSort, response);
      setEvents(sortedEvents);
      setLoading(false);
    };

    getEvents();
  }, []);

  const resetError = () => {
    setError("");
  };

  const toggleFiltersModal = () => {
    setIsFiltersModalOpen((prevState) => !prevState);
  };

  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
    const sortedEvents = sortEvents(newSortBy, events);
    setEvents([...sortedEvents]);
  };

  const handleFilter = async (filtersObj) => {
    toggleFiltersModal();
    setSortBy("");
    // remove empty values
    for (const [key, value] of Object.entries(filtersObj)) {
      if (!value) {
        delete filtersObj[key];
      }
      // since "tags" is an array (check whether array is empty)
      if (Array.isArray(value) && value?.length === 0) {
        delete filtersObj[key];
      }
    }

    if (Object.keys(filtersObj).length === 0) {
      return;
    }

    setIsFiltering(true);
    setLoading(true);

    const response = await fetchEventsByFilter(filtersObj);
    if (response.error) {
      setError(response.error);
      setLoading(false);
      return;
    }
    setEvents(response);
    setLoading(false);
  };

  const handleClearFilters = async () => {
    setIsFiltering(false);
    setLoading(true);

    const response = await fetchEvents();

    if (response.error) {
      setError(response.error);
      setLoading(false);
      return;
    }
    const sortedEvents = sortEvents(defaultSort, response);
    setEvents(sortedEvents);
    setSortBy(defaultSort);
    setLoading(false);
  };

  return (
    <>
      <div className="container mt-16">
        <div className="md:flex justify-between md:mx-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Upcoming Events
          </h1>

          <div className="flex items-center">
            <Button
              text="Filters"
              className="mt-5 md:mt-0 mr-5"
              onClick={toggleFiltersModal}
            />

            <SortByDropdown
              activeSortBy={sortBy}
              handleChange={handleSortByChange}
            />
          </div>
        </div>

        {isFiltering && (
          <div className="md:relative mt-5">
            <button
              className="text-sm hover:underline md:absolute right-6 text-primary"
              onClick={handleClearFilters}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="flex justify-center mt-10">
          <Alert
            message={error}
            onClose={resetError}
            className="w-[80%] lg:w-[50%]"
          />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <Events events={events} />
      )}

      <FiltersModal
        open={isFiltersModalOpen}
        toggleModal={toggleFiltersModal}
        handleFilter={handleFilter}
      />
    </>
  );
}

export default Home;
