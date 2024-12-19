import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://676127076be7889dc35feebf.mockapi.io/catanco/',
  }),

  tagTypes: ['Users'],
  endpoints: builder => ({
    fetchData: builder.query<any, string>({
      query: endpoint => endpoint,
      providesTags: result => (result ? [{ type: 'Users', id: 'LIST' }] : []),
    }),

    createUser: builder.mutation<void, { name: string; password: string; email: string }>({
      query: newUser => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),

    deleteUser: builder.mutation<void, string>({
      query: userId => ({
        url: `users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),

    getUser: builder.query<any, void>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
      providesTags: result => (result ? [{ type: 'Users', id: 'LIST' }] : []),
    }),
  }),
});

export const {
  useFetchDataQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
} = authSlice;

export default authSlice;
