import PropTypes from 'prop-types';
import React from "react";
import ListCard from "../../Components/UI/ListCard";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

export default function PlacePresenter({ placeListData, isLoading, error }) {
  if (placeListData !== undefined) {
 
    return (
      <section className="presenter-grid">
        {placeListData.map((placeData) => {
          return (
            <ListCard
              key={placeData.uc_seq}
              thumbImgUrl={placeData.main_img_t}
              title={placeData.place}
              content={placeData.title}
            />
          );
        })}
      </section>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <></>;
  }
}


PlacePresenter.propTypes = {
  placeListData:PropTypes.array, 
  isLoading:PropTypes.bool, 
  error:PropTypes.bool
}