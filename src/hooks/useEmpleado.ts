import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import type { Empleado } from "../types/Empleado";

export const useEmpleado = () => {
    const [empleados, setEmpleados] = useState<Empleado[]>(() => {
        const empleadosGuardados = localStorage.getItem("empleados");
        return empleadosGuardados ? (JSON.parse(empleadosGuardados) as Empleado[]) : [];
    });

    const [empleadoEditar, setEmpleadoEditar] = useState<Empleado | null>(null);

    useEffect(() => {
        localStorage.setItem("empleados", JSON.stringify(empleados));
    }, [empleados]);

    const agregarActualizarEmpleadp = (empleado: Empleado) => {
        if (!empleado.id) {
            empleado.id = String(Date.now());
            setEmpleados((prev) => [empleado, ...prev]);
            //Swal.fire("Empleado agregado correctamente", "", "success");
            Swal.fire({
                title: 'Empleado agregado correctamente',
                text: "",
                icon: "success",
            });
        } else {
            setEmpleados((prev) => 
                prev.map((e) => (e.id === empleado.id ? empleado : e))
            );
            setEmpleadoEditar(null);
            Swal.fire("Empleado actualizado correctamente", "", "success");
        }
    };
};