import React from "react";
import PhotoGallery from "../PhotoGallery/PhotoGallery.js";

const PartnersList = [
    {
      "title": "Comp 1",
      "location": "Location 1",
      "photo": ""
      //need to add the href the external link
      // and the part to the function to output it too
    },
    {
      "title": "Photo 2",
      "location": "Location 2",
      "photo": ""
    },
    {
        "title": "Photo 3",
        "location": "Location 3",
        "photo": ""
    }
]

const Partners = (/*need to figure out how to point PartnersList to 
feed PhotoGallery*/ ) => {
  return (
    <div className="Partners">
      <PhotoGallery />
    </div>
  );
};
  
export default Partners;
