import { useQuery } from "@tanstack/react-query";

export const usePrice = (params: {
  departure: string;
  to: string;
  mark: string;
  model: string;
  modification: string;
}) => {
  return useQuery({
    queryKey: ["price", params],
    queryFn: async () => {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`/api/price?${query}`);
      return res.json();
    },
    enabled: !!params.departure && !!params.modification,
  });
};