import useSWR from "swr";
import api from "../../api";
import MatzipPresenter from './MatzipPresenter';

export default function MatzipContainer() {
  const getGmgFoodInfo = async (url) => {
    const {
      data :{
        getgmgfoodinfo :{
          body :{
            items:{
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
    data: foodListData,
    isLoading,
    error,
  } = useSWR("getgmgfoodinfo", getGmgFoodInfo, {
    refreshInterval: 360000,
  });
 

  return (
    <MatzipPresenter foodListData={foodListData} isLoading={isLoading} error={error}/>
  )
}
