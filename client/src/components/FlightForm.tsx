import React, { useEffect, useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import cityService from "../services/cityService";
import flightService from "../services/flightService";
import dayjs from "dayjs";

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

function FlightForm({ getFlights, setOpen }) {
  const [cities, setCities] = useState<City[]>([]);
  const [origen, setOrigen] = useState<City>(emptyCity);
  const [destino, setDestino] = useState<City>(emptyCity);
  const [error, setError] = useState(false);

  const [fecha, setFecha] = useState(dayjs());
  const [salida, setSalida] = useState("");
  const [llegada, setLlegada] = useState("");
  const [precio, setPrecio] = useState(0);

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

  const sendFlight = async () => {
    try {
      const result = await flightService.createFlight({
        origen: origen.id,
        destino: destino.id,
        fecha: fecha.format("YYYY-MM-DD"),
        salida,
        llegada,
        precio,
      });
      getFlights();
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  function isValid() {
    return (
      llegada == "" ||
      salida == "" ||
      !fecha.isValid() ||
      !origen.id ||
      !destino.id
    );
  }

  return (
    <div>
      <div className="w-full flex gap-3 items-center">
        <div className="py-2 w-14">Desde:</div>
        <Autocomplete
          fullWidth
          disablePortal
          options={cities.filter(({ id }) => id !== destino?.id)}
          onChange={(event: any, value: City | null) => {
            const data = value ? value : emptyCity;
            setOrigen(data);
            setError(!!value);
          }}
          renderInput={(params) => <TextField {...params} label="Origen" />}
        />
        <div className="mt-1 text-sm font-semibold">
          {origen.id ? origen.aeropuerto : error ? "Selecciona un origen" : ""}
        </div>
      </div>
      <div className="p-3"></div>
      <div className="w-full flex gap-3 items-center">
        <div className="py-2 w-14">Hacia:</div>
        <Autocomplete
          fullWidth
          disablePortal
          options={cities.filter(({ id }) => id !== origen?.id)}
          onChange={(event: any, value: City | null) => {
            const data = value ? value : emptyCity;
            setDestino(data);
            setError(!!value);
          }}
          renderInput={(params) => <TextField {...params} label="Destino" />}
        />
        <div className="mt-1 text-sm font-semibold">
          {destino.id
            ? destino.aeropuerto
            : error
            ? "Selecciona un destino"
            : ""}
        </div>
      </div>
      <div className="p-2"></div>
      <div className="flex w-full items-center pt-2 justify-evenly">
        <label htmlFor="salida">Hora de salida: </label>
        <input
          id="salida"
          className="border p-2 rounded"
          type="time"
          placeholder="salida"
          value={salida}
          onChange={({ target }) => setSalida(target.value)}
        />

        <label htmlFor="llegada">Hora de llegada: </label>
        <input
          id="llegada"
          className="border p-2 rounded"
          type="time"
          placeholder="llegada"
          value={llegada}
          onChange={({ target }) => setLlegada(target.value)}
        />
      </div>
      <div className="p-3"></div>
      <div className="flex items-center w-full justify-evenly gap-2">
        <div>Fecha:</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={dayjs()}
            value={fecha}
            onChange={(newValue) => newValue && setFecha(newValue)}
          />
        </LocalizationProvider>
        <label htmlFor="precio">Precio: </label>
        <input
          id="precio"
          className="rounded border p-3 text-right"
          type="number"
          min={0}
          placeholder="Precio"
          value={precio}
          onChange={({ target }) => {
            setPrecio(target.value ? parseInt(target.value) : 0);
          }}
        />
      </div>
      {!fecha.isValid() && <div className="mt-1 text-sm">Fecha Invalida</div>}
      <div className="p-2"></div>
      <Button
        disabled={isValid()}
        className="rounded bg-indigo-300"
        onClick={sendFlight}
      >
        Guardar
      </Button>
    </div>
  );
}

export default FlightForm;
