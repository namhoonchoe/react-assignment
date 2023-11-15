import React from "react";



export default function PlacePresenter({ placeListData, isLoading, error }) {
  

  if (placeListData !== undefined) {
    console.log(placeListData);
    return <div>PlacePresenter</div>;
  }

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }
}


   

