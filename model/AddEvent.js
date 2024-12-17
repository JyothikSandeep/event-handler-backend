const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  type_of_event: {
    required: [true, "Enter event name"],
    type: String,
  },
  event_name: {
    required: [true, "enter event name"],
    type: String,
  },
  event_organiser: {
    required: [true, "Enter organizer name"],
    type: String,
    trim: true,
  },
  event_organiser_phonenumber: {
    required: [true, "Enter Organizer phone number"],
    type: String,
    trim: true,
  },
  event_amount: {
    required: [true, "Enter Event Amount "],
    type: Number,
  },
  headcount: {
    required: [true, "Enter head count"],
    type: Number,
  },
  event_date: {
    required: [true, "required event date"],
    type: Date,
  },
  event_time: {
    required: [true, "enter time"],
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Event = new mongoose.model("Event", EventSchema);

module.exports = { Event };
