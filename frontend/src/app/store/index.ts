import { configureStore } from "@reduxjs/toolkit";
import { uploadReducer } from "@/entities/upload/model/slice";

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(uploadLoggerMiddleware),
});

// временно для отладки
(window as any).store = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
