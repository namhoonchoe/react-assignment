import axios from "axios";

const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY  


//axios 인스턴스 생성

const api = axios.create({
  baseURL: 'https://apis.data.go.kr/6260000/fbusangmgtourinfo/',
  params: {
    ServiceKey: ApiKey,
    pageNo:1,
    numOfRows:20,
    resultType:"json"
  },
});


export default api