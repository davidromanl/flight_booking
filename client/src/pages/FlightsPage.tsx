import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import cityService from "../services/cityService";
import flightService from "../services/flightService";
import FlightList from "../components/FlightList";
import SvgIcon from "../components/SvgIcon";
import { useUserStore } from "../store/user";

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

function FlightsPage() {
  const [cities, setCities] = useState<City[]>([]);
  const [origen, setOrigen] = useState<City>(emptyCity);
  const [destino, setDestino] = useState<City>(emptyCity);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fecha, setFecha] = useState(dayjs());
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const searchFlights = async () => {
    const e = origen.id == "" || destino.id == "" || !fecha.isValid();
    setError(e);
    if (!e) {
      setLoading(true);
      const { body } = await flightService.searchFlights({
        origen: origen.id,
        destino: destino.id,
        fecha: fecha.format("YYYY-MM-DD"),
      });

      if (body.length == 0) alert("No se encontraron resultados");
      setFlights(body);
      setLoading(false);
    }
  };

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

  const stateUser = useUserStore((state) => state.user);

  return (
    <div>
      <h1>Bienvenido, {stateUser?.nombre || "Invitado"}</h1>
      <div className="md:flex w-full gap-3">
        <div className="p-1 sm: md:w-7/12">
          <h2 className="text-xl font-semibold">¿A dónde viajas?</h2>
          <div className="lg:flex gap-3">
            <div className="w-full md:w-1/2">
              <div className="py-2">Origen:</div>
              <Autocomplete
                disablePortal
                options={cities.filter(({ id }) => id !== destino?.id)}
                onChange={(event: any, value: City | null) => {
                  const data = value ? value : emptyCity;
                  setOrigen(data);
                  setError(!!value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Desde" />
                )}
              />
              <div className="mt-1 text-sm font-semibold">
                {origen.id
                  ? origen.aeropuerto
                  : error
                  ? "Selecciona un origen"
                  : ""}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="py-2">Hacia:</div>
              <Autocomplete
                disablePortal
                options={cities.filter(({ id }) => id !== origen?.id)}
                onChange={(event: any, value: City | null) => {
                  const data = value ? value : emptyCity;
                  setDestino(data);
                  setError(!!value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Destino" />
                )}
              />
              <div className="mt-1 text-sm font-semibold">
                {destino.id
                  ? destino.aeropuerto
                  : error
                  ? "Selecciona un destino"
                  : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm: md:w-5/12">
          <div className="p-1 w-full">
            <h2 className="text-xl font-semibold">¿Cuándo viajas?</h2>
            <div className="py-2">Fecha:</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                minDate={dayjs()}
                value={fecha}
                onChange={(newValue) => newValue && setFecha(newValue)}
              />
            </LocalizationProvider>
            {!fecha.isValid() && (
              <div className="mt-1 text-sm">Fecha Invalida</div>
            )}
          </div>
          <div className="p-2 w-auto">
            <div className="h-16"></div>
            <button
              onClick={searchFlights}
              className="m-auto duration-100 hover:text-lg hover:bg-indigo-800 w-40 h-14 font-semibold rounded bg-indigo-600 text-white"
            >
              Buscar vuelos
            </button>
          </div>
        </div>
      </div>
      <hr className="pt-10" />
      <SvgIcon
        class={`w-6 h-6 duration-100 animate-spin m-auto ${
          loading ? "opacity-100" : "opacity-0"
        }`}
        icon="loading"
      ></SvgIcon>
      <hr />
      <FlightList flights={flights} cities={cities}></FlightList>
    </div>
  );
}

export default FlightsPage;
