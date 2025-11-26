import type { ListaEmpleadoProps } from "../types/Empleado";

const ListaEmpleado: React.FC<ListaEmpleadoProps> = ({empleados, setEmpleadoEditar, eliminarEmpleado}) => {
    if (!empleados || empleados.length === 0) {
        return <p className="text-center text-gray-600">No hay empleados</p>
    }

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <table className="min-w-full w-full table-auto">
          <thead>
            <tr>
              <th className="text-left p-2 font-medium text-gray-700" >Nombre</th>
              <th className="text-left p-2 font-medium text-gray-700" >Cargo</th>
              <th className="text-left p-2 font-medium text-gray-700" >Departamento</th>
              <th className="p-2 font-medium text-gray-700">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id} className="border-t hover:gb-gray-50">
                <td className="p-2 align-middle">{empleado.nombre}</td>
                <td className="p-2 align-middle">{empleado.cargo}</td>
                <td className="p-2 align-middle">{empleado.departamento}</td>
                <td className="p-2 align-middle">
                  <div className="flex gap-2 justify-end">
                    <button
                      type="button"
                      onClick={() => setEmpleadoEditar(empleado)}
                      className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => eliminarEmpleado(empleado.id)}
                      className="px-3 py-1 bg-red-200 hover:bg-red-300 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ListaEmpleado;