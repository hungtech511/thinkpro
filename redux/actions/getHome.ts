
import { query } from "@/utils/queryList";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";


 
export const getHomePage = createAsyncThunk('page/home-page', async (page, { rejectWithValue }) => {
  try {
    const data = await query.HOME_PAGE();
    return data
    
  } catch (err) {
    const error = err as AxiosError; 
    return rejectWithValue(error.message);
  }
})