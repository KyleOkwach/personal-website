// import "server-only";

import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  tags,
}: {
  query: QueryString;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}