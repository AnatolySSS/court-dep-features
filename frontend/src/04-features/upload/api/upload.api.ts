import { baseApi } from "@/06-shared";
import { toDateString } from "../lib/toDateString";

export const UploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    upload: builder.mutation<any, { file: File; dateRange: { startDate: Date | null; endDate: Date | null } }>({
      query: ({ file, dateRange }) => {
        const formData = new FormData();

        formData.append("file", file);

        if (dateRange.startDate) {
          formData.append("startDate", toDateString(dateRange.startDate));
        }

        if (dateRange.endDate) {
          formData.append("endDate", toDateString(dateRange.endDate));
        }

        return {
          url: "/upload",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),

  overrideExisting: "throw",
});

export const { useUploadMutation } = UploadApi;
