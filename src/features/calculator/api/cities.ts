import { useQuery } from "@tanstack/react-query";

export const useCities = (departure: string) => {
  return useQuery({
    queryKey: ["cities", departure],
    queryFn: async () => {
      const res = await fetch(`/api/cities?departure=${departure}`);
      return res.json();
    },
    enabled: !!departure,
  });
};