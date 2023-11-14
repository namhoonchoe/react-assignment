import { useEffect, useState } from "react";
import api from "../../api";
import HomePresenter from "./HomePresenter";

function HomeContainer() {
  const [tourInfo, setTourInfo] = useState(undefined);

  {
    /** useEffect 안에서 바로 useState 바꿀 수 없음! */
  }
  const handleInfo = (data) => {
    return setTourInfo(data);
  };

  const getGmgTourInfo = async (url) => {
    try {
      const {
        data: {
          getgmgtourinfo: {
            body: { items },
          },
        },
      } = await api.get(url);
      handleInfo(items);
    } catch (e) {
      console.log(`${e} has ocurred`);
    } finally {
      console.log("it's done");
      console.log(tourInfo);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getGmgTourInfo("getgmgtourinfo");
      console.log(tourInfo);
    }

    return () => {
      mounted = false;
    };
  }, []);

  return <HomePresenter />;
}

export default HomeContainer;
