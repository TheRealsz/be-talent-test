import { IEmployee } from "../types/employee";
import { formatDate } from "../utils/formatDate";
import { formatPhone } from "../utils/formatPhone";

export function TableEmployee({ employees }: { employees: IEmployee[] }) {
    return (
        <table className="hidden min-w-full border border-gray-300 lg:table">
            <thead>
                <tr className="bg-blue-700 text-white rounded-t-lg">
                    <th className="py-3.5 px-8 text-left">FOTO</th>
                    <th className="py-3.5 px-8 text-left">NOME</th>
                    <th className="py-3.5 px-8 text-left">CARGO</th>
                    <th className="py-3.5 px-8 text-left">DATA DE ADMISSÃO</th>
                    <th className="py-3.5 px-8 text-left">TELEFONE</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id} className="border-b border-gray-300">
                        <td className="py-3 px-8">
                            <img src={employee.image} alt={employee.name} className="size-8 rounded-full" />
                        </td>
                        <td className="py-3 px-8 font-roboto">{employee.name}</td>
                        <td className="py-3 px-8 font-roboto">{employee.job}</td>
                        <td className="py-3 px-8 font-roboto">{formatDate(employee.admission_date)}</td>
                        <td className="py-3 px-8 font-roboto">{formatPhone(employee.phone)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}