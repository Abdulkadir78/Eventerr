const eventsSortMap = {
  "start ascending": (events) => {
    return events.sort(
      (a, b) => +new Date(a.startDate) - +new Date(b.startDate)
    );
  },
  "start descending": (events) => {
    return events.sort(
      (a, b) => +new Date(b.startDate) - +new Date(a.startDate)
    );
  },
  "end ascending": (events) => {
    return events.sort((a, b) => +new Date(a.endDate) - +new Date(b.endDate));
  },
  "end descending": (events) => {
    return events.sort((a, b) => +new Date(b.endDate) - +new Date(a.endDate));
  },
};

const defaultSortFunc = (events) => {
  return eventsSortMap["start ascending"](events);
};

const sortEvents = (sortBy, events) => {
  const sortFunc = eventsSortMap[sortBy];
  return sortFunc ? sortFunc(events) : defaultSortFunc(events);
};

const isValidDate = (date) => {
  return !Number.isNaN(new Date(date).getTime());
};

export { isValidDate, sortEvents };
