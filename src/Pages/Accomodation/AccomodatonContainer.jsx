import React from "react";
import useSWR from "swr";
import api from "../../api";
import AccomodationPresenter from "./AccomodationPresenter";

function AccomodatonContainer() {
  const getGmgAccomodationInfo = async (url) => {
    const {
      data: {
        getgmghotelinfo: {
          body: {
            items: { item },
          },
        },
      },
    } = await api.get(url);
    console.log(item);
    return item;
  };

  const {
    data: hotellistData,
    isLoading,
    error,
  } = useSWR("getgmghotelinfo", getGmgAccomodationInfo, {
    refreshInterval: 360000,
  });
  return (
    <AccomodationPresenter
      accomodationListData={hotellistData}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default AccomodatonContainer;
