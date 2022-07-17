import Event from "./Event";

function Events({ events }) {
  return (
    <>
      <div className="mb-10 md:flex md:justify-center flex-wrap gap-10">
        {!events?.length ? (
          <p className="mt-32 text-sm text-gray-500 text-center">
            No events available :(
          </p>
        ) : (
          events?.map((event) => (
            <Event
              key={event._id}
              name={event.name}
              type={event.type}
              image={event.image}
              region={event.region}
              tags={event.tags}
              startDate={event.startDate}
              endDate={event.endDate}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Events;
