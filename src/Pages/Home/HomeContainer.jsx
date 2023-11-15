import { useEffect } from "react";
import useSWR from "swr";
import api from "../../api";
import HomePresenter from "./HomePresenter";

function HomeContainer() {
  const getGmgTourInfo = async (url) => await api.get(url);

  const {
    data: {
      data: {
        getgmgtourinfo: {
          body: { items:{item} },
        },
      },
    },
  } = useSWR("getgmgtourinfo", getGmgTourInfo, { refreshInterval: 360000 });

  { /**자료 구조 정리용 코드임 지워도 무방함.... */}
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      console.log(item);
    }

    return () => {
      mounted = false;
    };
  }, [item]);

  return <HomePresenter />;
}

export default HomeContainer;
