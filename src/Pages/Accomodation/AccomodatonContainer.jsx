import React from 'react';
import useSWR from "swr";
import api from "../../api";

function AccomodatonContainer() {
  const getGmgAccomodationInfo = async (url) => {
    const {
      data:{
        getgmghotelinfo :{
          body :{
            items :{
              item
            }
          }
        }
      }  
    } = await api.get(url);
    console.log(item)
    return item;
    
  };

  const {
    data: HotellistData,
    isLoading,
    error,
  } = useSWR("getgmghotelinfo", getGmgAccomodationInfo, {
    refreshInterval: 360000,
  });
  return (
    <div>AccomodatonContainer</div>
  )
}

export default AccomodatonContainer