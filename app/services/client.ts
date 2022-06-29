import axios from "axios";
import ApiConfig from "app/config/api-config";
import moment from "moment";

// const apiClient = axios.create({
//   baseURL: '/react-dev',
//   responseType: 'json',
//   withCredentials: true,
// });

// export { apiClient };

const apiClient = axios.create({
  baseURL: ApiConfig.BASE_URL,
});
apiClient.defaults.headers.post["Content-Type"] = "application/json";

var datePicked = new Date();
var DateVar = moment(datePicked).format("YYYY-MM-DD hh:mm:ss");
console.log(DateVar);


export default apiClient;

export const setAuth = (token: any) => {
  console.log("Header Token", token);
  apiClient.defaults.headers.Authorization = `${token}`;
  // apiClient.defaults.headers.Authorization = `Bearer ${token}`;
};

export const RemoveAuth = () => {
  delete apiClient.defaults.headers.Authorization;
};
