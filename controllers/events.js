const asyncHandler = require("../utils/asyncHandler");
const Event = require("../db/models/Event");

// @desc    Get all events
// @route   GET /api/events
// @access  Public
const getAllEvents = asyncHandler(async (req, res) => {
  let events, start, end;

  if (req.query.startDate) {
    start = new Date(req.query.startDate).toISOString();
    delete req.query.startDate;
  }

  if (req.query.endDate) {
    end = new Date(req.query.endDate).toISOString();
    delete req.query.endDate;
  }

  if (req.query.tags?.length) {
    const tags = req.query.tags;
    delete req.query.tags;
    events = await Event.find({ ...req.query, tags: { $in: tags } });
  } else {
    events = await Event.find(req.query);
  }

  // filter by dates
  if (start) {
    events = events.filter(
      (event) => new Date(event.startDate) >= new Date(start)
    );
  }

  if (end) {
    events = events.filter((event) => new Date(event.endDate) <= new Date(end));
  }

  res.json({ events: events.reverse(), success: true });
});

module.exports = { getAllEvents };
