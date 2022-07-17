const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: [100, "Name cannot be more than 100 characters long"],
      required: [true, "Event name is required"],
    },

    startDate: {
      type: Date,
      required: [true, "Event start date is required"],
    },

    endDate: {
      type: Date,
      required: [true, "Event end date is required"],
    },

    region: {
      type: String,
      enum: {
        values: [
          "north bangalore",
          "south bangalore",
          "central bangalore",
          "east bangalore",
        ],
        message: "Invalid region",
      },
      required: [true, "Event region is required"],
    },

    type: {
      type: String,
      enum: {
        values: [
          "entertainment",
          "spiritual",
          "professional",
          "political",
          "sports",
        ],
        message: "Invalid event type",
      },
      required: [true, "Event type is required"],
    },

    tags: [
      {
        type: String,
        enum: {
          values: [
            "weekend",
            "full day",
            "nightlife",
            "outdoors",
            "indoors",
            "has entry fee",
            "technology",
            "english only",
          ],
          message: "Invalid event tag",
        },
      },
    ],

    image: {
      type: String,
      required: [true, "Event image is required"],
    },
  },

  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
