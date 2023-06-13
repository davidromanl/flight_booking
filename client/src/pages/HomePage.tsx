import React, { useEffect, useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { useUserStore } from "../store/user";

function HomePage() {
  const [open, setOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { body } = await userService.getUsers();
      setUsuarios(body);
    } catch (error) {
      console.error(error);
    }
  };

  const saveUser = async () => {
    try {
      const user = { nombre, email };
      await userService.createUser(user);
      fetchUsers();
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = useUserStore((state) => state.loginUser);
  const navigate = useNavigate();

  function setUser({ id, nombre }) {
    loginUser({ id, nombre });
    navigate("/flights");
  }

  function isValidUser() {
    return nombre == "" || email == "";
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1>Bienvenido, selecciona un usuario:</h1>
        <Button onClick={() => setOpen(true)}>Nuevo Usuario</Button>
      </div>
      <div className="p-3"></div>
      <div className="grid md:grid-cols-3 gap-3 text-center">
        {usuarios.map(({ id, nombre, email }) => {
          return (
            <div
              className="md:w-60 shadow cursor-pointer hover:font-semibold duration-100 hover:bg-slate-400 bg-slate-200 p-4 border rounded"
              key={id}
              onClick={() => setUser({ id, nombre })}
            >
              <div>{nombre}</div>
              <div>{email}</div>
            </div>
          );
        })}
      </div>
      <hr className="mt-10" />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="bg-white mt-20 absolute left-1/2 p-4 -ml-72 rounded w-full max-w-xl text-center">
          <h2 className="w-full pb-2 font-semibold">Nuevo Usuario</h2>
          <TextField
            fullWidth
            size="small"
            placeholder="Ingrese un nombre"
            label="Nombre"
            type="text"
            onChange={({ target }) => setNombre(target.value)}
            value={nombre}
          />
          <div className="p-3"></div>
          <TextField
            fullWidth
            size="small"
            placeholder="usuario@correo.com"
            label="Email"
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
          />
          <div className="p-3"></div>
          <Button onClick={saveUser} disabled={isValidUser()}>
            Guardar
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
