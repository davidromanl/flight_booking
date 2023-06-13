import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import flightService from "../services/flightService";
import FlightForm from "../components/FlightForm";

function AdminPage() {
  const columns: GridColDef[] = [
    { field: "fecha", headerName: "Fecha", width: 270 },
    { field: "origen", headerName: "Origen", width: 270 },
    { field: "destino", headerName: "Destino", width: 270 },
    { field: "precio", headerName: "Precio", width: 270 },
  ];

  const [rows, setRows] = useState<GridRowsProp>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getFlights();
  }, []);

  const getFlights = async () => {
    try {
      const { body } = await flightService.getFlights();
      setRows(body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex p-1 justify-between">
        <h1 className="text-xl">Administrar Vuelos</h1>
        <Button onClick={() => setOpen(true)}>Añadir vuelo</Button>
      </div>

      <DataGrid rows={rows} columns={columns} getRowId={({ id }) => id} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-full text-center p-3 rounded mt-20 mx-auto bg-white max-w-xl">
          <h3 className="text-lg font-semibold pb-3">Añadir nuevo vuelo</h3>
          <FlightForm getFlights={getFlights} setOpen={setOpen}></FlightForm>
        </div>
      </Modal>
    </div>
  );
}

export default AdminPage;
