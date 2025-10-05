import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';
import { DataSetItem } from '../types';

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: graphqlRequestBaseQuery({
    url: GRAPHQL_URL
  }),

  // Можно вообще не указывать tagTypes, если нет инвалидации
  endpoints: (builder) => ({
    getWords: builder.query<{ words: DataSetItem[] }, void>({
      query: () => ({
        document: gql`
          query GetWords {
            words(kind: "all") {
              id
              value
              translation
              speechUrl
              kind
            }
          }
        `,
      }),
      transformResponse: (response: { words: DataSetItem[] }) => ({
        words: response.words.filter(word => word.kind !== 'phrase'),
      }),
    }),
    getWordById: builder.query<{ word: DataSetItem }, string>({
      query: (id) => ({
        document: gql`
          query GetWordById {
            wordById(id: "7db4479a-2a2f-43da-b805-8f0e5d3c3bb8") {
              id
              value
              translation
              speechUrl
              kind
            }
          }
        `,
        variables: { id },
      }),
    }),
    addWord: builder.mutation<{ addWord: DataSetItem }, { value: string; translation: string; kind: string, tags: string[] }>({
      query: ({ value, translation, kind }) => ({
        document: gql`mutation {
          addWord(input: {
            value: "${value}",
            kind: "${kind}",
            firstTranslation: {
              language: "ru", values: ["${translation}"]
            },tags: []})
        }
        `,
        variables: { value, translation, kind },
      }),
    }),
    getPhrases: builder.query<{ phrases: DataSetItem[] }, void>({
      query: () => ({
        document: gql`
          query GetPhrases {
            phrases {
              id
              value
              translation
              speechUrl
              kind
            }
          }
        `,
      }),
      transformResponse: (response: { phrases: DataSetItem[] }) => ({
        phrases: response.phrases.filter(phrase => phrase.kind === 'phrase'),
      }),
    }),
  }),
});

export const { useGetWordsQuery, useGetWordByIdQuery, useAddWordMutation, useGetPhrasesQuery } = graphqlApi;
