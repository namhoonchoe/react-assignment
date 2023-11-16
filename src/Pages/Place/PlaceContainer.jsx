import useSWR from "swr";
import api from "../../api";
import PlacePresenter from "./PlacePresenter";

function PlaceContainer() {
  const getGmgTourInfo = async (url) => {
    const {
      data: {
        getgmgtourinfo: {
          body: {
            items:{
              item
            } 
          },
        },
      },
    } = await api.get(url);
    return item;
  };

  const {
    data: PlaceListsData,
    isLoading,
    error,
  } = useSWR("getgmgtourinfo", getGmgTourInfo, {
    refreshInterval: 360000,
  });

  

  return (
    <PlacePresenter
      placeListData={PlaceListsData}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default PlaceContainer;
