const { Event } = require("../model/AddEvent");
const {User}=require("../model/AddUser")
const DisplayUpcomingEvents = async (req, res) => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Months are 0-indexed
    const currentDay = today.getDate();

    // Filter birthdays for this month and today
    const data = await User.find({   });
    console.log(data)
    const birthdaysThisYear = data.filter((person) => {
      const birthday = new Date(person.date_of_birth);
      return (
        birthday.getMonth() + 1 === currentMonth
      );
    });
  console.log(birthdaysThisYear);
  res.send(birthdaysThisYear);
};

module.exports = { DisplayUpcomingEvents };
