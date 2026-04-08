import { configureStore } from "@reduxjs/toolkit";
import { uploadReducer } from "@/04-features";
import { baseApi } from "@/06-shared";

// middleware для логирования изменений upload.data
const uploadLoggerMiddleware = (store: any) => (next: any) => (action: any) => {
  const prevData = store.getState().upload.data;

  const result = next(action);

  const nextData = store.getState().upload.data;

  if (prevData !== nextData) {
    console.log(nextData);
  }

  return result;
};

export const store = configureStore({
  reducer: {
    upload: uploadReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(uploadLoggerMiddleware)
      .concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
