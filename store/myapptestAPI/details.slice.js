import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_detail_list = createAsyncThunk("details/api_v1_detail_list", async payload => {
  const response = await apiService.api_v1_detail_list(payload);
  return response.data;
});
export const api_v1_detail_create = createAsyncThunk("details/api_v1_detail_create", async payload => {
  const response = await apiService.api_v1_detail_create(payload);
  return response.data;
});
export const api_v1_detail_retrieve = createAsyncThunk("details/api_v1_detail_retrieve", async payload => {
  const response = await apiService.api_v1_detail_retrieve(payload);
  return response.data;
});
export const api_v1_detail_update = createAsyncThunk("details/api_v1_detail_update", async payload => {
  const response = await apiService.api_v1_detail_update(payload);
  return response.data;
});
export const api_v1_detail_partial_update = createAsyncThunk("details/api_v1_detail_partial_update", async payload => {
  const response = await apiService.api_v1_detail_partial_update(payload);
  return response.data;
});
export const api_v1_detail_destroy = createAsyncThunk("details/api_v1_detail_destroy", async payload => {
  const response = await apiService.api_v1_detail_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_detail_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_detail_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_detail_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_detail_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_detail_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_detail_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_detail_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_detail_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_detail_list,
  api_v1_detail_create,
  api_v1_detail_retrieve,
  api_v1_detail_update,
  api_v1_detail_partial_update,
  api_v1_detail_destroy,
  slice: detailsSlice
};