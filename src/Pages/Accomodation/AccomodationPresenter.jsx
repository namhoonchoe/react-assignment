import PropTypes from 'prop-types';
import React from 'react';
import ListCard from "../../Components/UI/ListCard";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

const AccomodationPresenter = ({ accomodationListData, isLoading, error }) => {  
    if (accomodationListData !== undefined) {
      return (
        <section className="presenter-grid">
          {accomodationListData.map((accomodationData) => {
            return (
              <ListCard
                key={accomodationData.uc_seq}
                thumbImgUrl={accomodationData.main_img_t}
                title={accomodationData.place}
                content={accomodationData.title}
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



AccomodationPresenter.propTypes = {
  accomodationListData:PropTypes.array, 
  isLoading:PropTypes.bool, 
  error:PropTypes.bool
}

export default AccomodationPresenter