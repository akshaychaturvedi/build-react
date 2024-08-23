// import axios from "axios";

// const baseURL = "northwind/Northwind/Northwind.svc/";

// const instance = axios.create({
//   baseURL
// });

// export const getTableData = async (params = { $top: 100, $skip: 0 }) => {
//   const { data } = await instance.get("/Shippers", {
//     params
//   });

//   return data.d?.results || data.d || data.value;
// };

// export const getTableCount = async () => {
//   const { data } = await instance.get("/Shippers/$count");
//   return data;
// };
