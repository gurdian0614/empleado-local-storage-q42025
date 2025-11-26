import useFormularioEmpleado from "../hooks/useFormularioEmpleado";
import type { Empleado, Props } from "../types/Empleado";

const FormularioEmpleado: React.FC<Props> = ({
    agregarActualizarEmpleado,
    empleadoEditar,
    setEmpleadoEditar,
}) => {
    const {
        formularioDatos, manejarCambio, manejarEnvio, manejarCancelacion
    } = useFormularioEmpleado(empleadoEditar, setEmpleadoEditar, agregarActualizarEmpleado);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {empleadoEditar ? "Editar Empleado": "Agregar Nuevo Empleado"}
            </h2>

            <form onSubmit={manejarEnvio}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Nombre</label>
                    <input name="nombre" value={formularioDatos.nombre} onChange={manejarCambio} className="w-full border px-3 py-2 rounded" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Cargo</label>
                    <input name="cargo" value={formularioDatos.cargo} onChange={manejarCambio} className="w-full border px-3 py-2 rounded" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Departamento</label>
                    <input name="departamento" value={formularioDatos.departamento} onChange={manejarCambio} className="w-full border px-3 py-2 rounded" />
                </div>

                <div className="flex gap-2 justify-end">
                    <button type="button" onClick={manejarCancelacion} className="px-4 py-2 rounded bg-gray-200">
                        Cancelar
                    </button>
                    <button type="submit" className="px-4 py-2 rounded bg-gray-800 text-white">
                        {empleadoEditar ? "Actualizar": "Agregar"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormularioEmpleado;