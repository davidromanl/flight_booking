import React, { useEffect, useState } from "react";
import reservationService from "../services/reservationService";
import { useUserStore } from "../store/user";
import dayjs from "dayjs";
import cityService from "../services/cityService";

function ReservationsPage() {
  interface City {
    id: string;
    label: string;
    aeropuerto: string;
  }

  useEffect(() => {
    fetchReservations();
    fetchData();
  }, []);

  const [reservations, setReservations] = useState([]);
  const stateUser = useUserStore((state) => state.user);
  const [cities, setCities] = useState<City[]>([]);

  const fetchReservations = async () => {
    if (!stateUser) return;
    try {
      const { body } = await reservationService.getReservations(stateUser?.id);
      const flights = body.map(({ vuelo }) => vuelo);
      setReservations(flights);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const { body } = await cityService.getCities();
      setCities(body as City[]);
    } catch (error) {
      console.error(error);
    }
  };

  const getCity = (idCity: string) => {
    return cities.find(({ id }) => id === idCity);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold">Mis Reservaciones</h1>
      <hr className="my-2" />
      {reservations.map(
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
                    Origen: {getCity(origen)?.label}
                  </div>
                  <div className="text-lg">{getCity(origen)?.aeropuerto}</div>
                  <div>Hora de salida: {salida}</div>
                </div>
                <div className="py-4">
                  <small>Valor</small>
                  <div className="text-xl font-bold">
                    ${new Intl.NumberFormat("es-MX").format(precio)}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <small>Hacia</small>
                  <div className="font-semibold text-lg">
                    Destino: {getCity(destino)?.label}
                  </div>
                  <div className="text-lg">{getCity(destino)?.aeropuerto}</div>
                  <div>Hora de llegada: {llegada}</div>
                </div>
              </div>
            </div>
          );
        }
      )}
      {reservations.length === 0 && <div>Aun no tienes reservaciones</div> }
    </div>
  );
}

export default ReservationsPage;
