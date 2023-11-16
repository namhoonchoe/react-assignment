import PropTypes from 'prop-types';
import React from "react";
import ListCard from "../../Components/UI/ListCard";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

export default function MatzipPresenter({ foodListData, isLoading, error }) {
  if (foodListData !== undefined) {
    return (
      <section className="presenter-grid">
        {foodListData.map((matzipData) => {
          return (
            <ListCard
              key={matzipData.uc_seq}
              thumbImgUrl={matzipData.main_img_t}
              title={matzipData.name}
              content={matzipData.itemcntnts}
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


MatzipPresenter.propTypes = {
  foodListData:PropTypes.array, 
  isLoading:PropTypes.bool, 
  error:PropTypes.bool
}