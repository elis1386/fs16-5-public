import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Brewery } from "../types/brewInterface";

export const useBreweries = () => {


  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Brewery[]>(
        "https://api.openbrewerydb.org/v1/breweries?per_page=12"
      );
      setBreweries(response.data);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removePrefix = (name: string) => {
    return name.replace(/^\(\d+\)\s*/, ""); // Removes "(XXX)" followed by whitespace
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { breweries, error, loading, removePrefix };
};
