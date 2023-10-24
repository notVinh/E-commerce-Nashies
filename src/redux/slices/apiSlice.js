import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
