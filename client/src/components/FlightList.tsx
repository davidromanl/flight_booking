import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es-us";
import { useUserStore } from "../store/user";
import reservationService from "../services/reservationService";
import { Alert, Snackbar } from "@mui/material";

const FlightList = ({ flights, cities }) => {
  const getCity = (idCity: string) => {
    return cities.find(({ id }) => id === idCity);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const stateUser = useUserStore((state) => state.user);
  const [reservations, setReservations] = useState<String[]>([]);
  const [msg, setMsg] = useState(false);

  const saveReservation = async (id: string) => {
    try {
      await reservationService.createReservation({
        user_id: stateUser.id,
        flight_id: id,
      });
      setMsg(true);
      fetchReservations();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReservations = async () => {
    if (!stateUser) return;
    try {
      const { body } = await reservationService.getReservations(stateUser?.id);
      const flightIds = body.map(({ flight_id }) => flight_id);
      setReservations(flightIds);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl p-2">Resultados: {flights.length}</h1>
      <hr />
      {flights.map(
        ({ id, fecha, origen, salida, destino, llegada, precio }) => {
          return (
            <div
              key={id}
              className="w-full text-center py-2 my-3 border rounded hover:bg-slate-200 hover:shadow duration-100"
            >
              <div className="w-full capitalize font-semibold border-b">
                Fecha: {dayjs(fecha).locale("es-us").format("MMMM DD / YYYY")}
              </div>
              <div className="md:flex w-full">
                <div className="md:w-1/2">
                  <small>Desde</small>
                  <div className="font-semibold text-lg">
                    Origen: {getCity(origen).label}
                  </div>
                  <div className="text-lg">{getCity(origen).aeropuerto}</div>
                  <div>Hora de salida: {salida}</div>
                </div>
                <div className="py-4">
                  <small>Precio</small>
                  <div className="text-xl font-bold">
                    ${new Intl.NumberFormat("es-MX").format(precio)}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <small>Hacia</small>
                  <div className="font-semibold text-lg">
                    Destino: {getCity(destino).label}
                  </div>
                  <div className="text-lg">{getCity(destino).aeropuerto}</div>
                  <div>Hora de llegada: {llegada}</div>
                </div>
              </div>
              {reservations.includes(id) && (
                <div className="text-orange-600">Reservado</div>
              )}
              {!reservations.includes(id) && stateUser && (
                <div
                  onClick={() => saveReservation(id)}
                  className="py-2 hover:bg-blue-700 duration-100 hover:font-semibold cursor-pointer px-20 w-fit text-white mx-auto rounded bg-blue-600"
                >
                  Reservar Vuelo
                </div>
              )}
            </div>
          );
        }
      )}
      <hr />
      {flights.length === 0 && "Sin Resultados"}
      <Snackbar
        open={msg}
        autoHideDuration={6000}
        onClose={() => setMsg(false)}
      >
        <Alert severity="success">!Tu reserva se ha creado con exito!</Alert>
      </Snackbar>
    </div>
  );
};

export default FlightList;
