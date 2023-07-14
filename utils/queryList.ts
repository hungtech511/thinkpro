import { instance } from "@/config/axios";

export const query = {
  HOME_PAGE: async () => {
    const { data } = await instance.get(`front-store/v3/home-setting`);    
    return data;
  },
};
