import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function useQuerySubscribe<TData>(queryKey: string[]) {
  const queryClient = useQueryClient();
  const [data, setData] = useState(() => queryClient.getQueryData<TData>(queryKey));

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(({ query }) => {
      if (query.queryKey.toString() === queryKey.toString()) setData(queryClient.getQueryData<TData>(queryKey));
    });

    return () => unsubscribe();
  }, [queryClient, queryKey]);

  return data;
}
