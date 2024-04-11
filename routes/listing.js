const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


// app.get("/listings", wrapAsync(listingController.index))
    
// app.post("/listings",isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));
    
// //New route
// app.get("/listings/new", isLoggedIn, listingController.renderNewForm);


   
// app.get("/listings/:id",wrapAsync(listingController.showListing))
// app.put("/listings/:id",isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
// app.delete("/listings/:id",isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// //Edit route
// app.get("/listings/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm)
// );



module.exports = router;