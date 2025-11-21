import { useEffect, useState } from "react";
import type { Empleado, FormularioDatos } from "../types/Empleado";
import Swal from "sweetalert2";

const useFormularioEmpleado = (
    empleadoEditar: Empleado | null, 
    setEmpleadoEditar: (e: Empleado | null) => void,
    agregarActualizarEmpleado: (e: Empleado) => void,
) => {
    const [formularioDatos, setFormularioDatos] = useState<FormularioDatos>({
        nombre: "",
        cargo: "",
        departamento: "",
    });

    useEffect(() => {
        if (empleadoEditar) {
            setFormularioDatos({
                nombre: empleadoEditar.nombre,
                cargo: empleadoEditar.cargo,
                departamento: empleadoEditar.departamento,
            });
        }
    }, [empleadoEditar]);

    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();

        setFormularioDatos((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    
    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formularioDatos.nombre.trim() || !formularioDatos.cargo.trim() || !formularioDatos.departamento) {
            Swal.fire("Nombre o cargo son obligatorios", "", "warning");
            return;
        }
    
        const empleado: Empleado = {
            id: empleadoEditar?.id ?? "",
            nombre: formularioDatos.nombre,
            cargo: formularioDatos.cargo,
            departamento: formularioDatos.departamento,
        };
    
        agregarActualizarEmpleado(empleado);
        setFormularioDatos({
            nombre: "",
            cargo: "",
            departamento: "",
        });
        setEmpleadoEditar(null);
    };
    
    const manejarCancelacion = () => {
        setEmpleadoEditar(null);
        setFormularioDatos({
            nombre: "",
            cargo: "",
            departamento: "",
        });
    };

    return {
        formularioDatos,
        manejarCambio,
        manejarEnvio,
        manejarCancelacion,
    };
}

export default useFormularioEmpleado;