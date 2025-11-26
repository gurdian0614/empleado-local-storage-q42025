export interface Empleado {
    id: string;
    nombre: string;
    cargo: string;
    departamento: string;
};

export interface FormularioDatos {
    nombre: string;
    cargo: string;
    departamento: string;
};

export interface Props {
    agregarActualizarEmpleado: (e: Empleado) => void;
    empleadoEditar: Empleado | null;
    setEmpleadoEditar: (e: Empleado | null) => void;
};

export interface ListaEmpleadoProps {
    empleados: Empleado[];
    setEmpleadoEditar: (empleado: Empleado) => void;
    eliminarEmpleado: (id: string) => void;
}