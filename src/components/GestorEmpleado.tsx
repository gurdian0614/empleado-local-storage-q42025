import { useEmpleado } from "../hooks/useEmpleado";
import FormularioEmpleado from "./FormularioEmpleado";
import ListaEmpleado from "./ListaEMpleado";

const GestorEmpleado: React.FC = () => {
    const {empleados, empleadoEditar, setEmpleadoEditar, agregarActualizarEmpleado, eliminarEmpleado} = useEmpleado();
    return (
        <>
            <h1 className="text-4xl font-bold text-center my-6 text-gray-800">
                Gestor de Empleados
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                    <FormularioEmpleado
                        agregarActualizarEmpleado={agregarActualizarEmpleado}
                        empleadoEditar={empleadoEditar}
                        setEmpleadoEditar={setEmpleadoEditar}
                     />
                </div>

                <div className="md:col-span-2">
                    <ListaEmpleado empleados={empleados} setEmpleadoEditar={setEmpleadoEditar} eliminarEmpleado={eliminarEmpleado} />
                </div>
            </div>
        </>
    );
}

export default GestorEmpleado;