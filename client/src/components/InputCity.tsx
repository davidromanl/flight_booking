import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import cityService from "../services/cityService";

function InputCity({ origen }) {
  const [cities, setCities] = useState<City[]>([]);

  interface City {
    id: string;
    label: string;
    aeropuerto: string;
  }

  const emptyCity = {
    id: "",
    label: "",
    aeropuerto: "",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { body } = await cityService.getCities();
      const result: City[] = [];
      body.forEach(({ ciudad, id, aeropuerto }) => {
        result.push({ label: ciudad, id, aeropuerto });
      });
      setCities(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Autocomplete
      disablePortal
      options={cities.filter(({ id }) => id !== origen?.id)}
      onChange={(event: any, value: City | null) => {
        const data = value ? value : emptyCity;
      }}
      renderInput={(params) => <TextField {...params} label="Destino" />}
    />
  );
}

export default InputCity;
