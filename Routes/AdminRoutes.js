const router = require("express");
const adminRouter = router();
const { AddUserController } = require("../Controllers/AddUserController");
const { GetUsersData } = require("../Controllers/GetUsersData");
const {AddEventController}=require('../Controllers/AddEventController')
const {DisplayPastEvent}=require('../Controllers/DisplayPastEvent')
const {DisplayUpcomingEvents}=require("../Controllers/DisplayUpcomingEvents")
const {DisplayOnGoingEvents}=require("../Controllers/DisplayOngoingEvents");
const {AdminController}=require("../Controllers/AddAdminController")
adminRouter.post("/adduser", AddUserController);
adminRouter.get("/getusersdata", GetUsersData);
adminRouter.post("/addevent",AddEventController);
adminRouter.get("/pastevents",DisplayPastEvent)
adminRouter.get("/upcomingevents",DisplayUpcomingEvents)
adminRouter.get("/ongoingevents",DisplayOnGoingEvents);
adminRouter.post("/addadmin",AdminController)
module.exports = { adminRouter };
