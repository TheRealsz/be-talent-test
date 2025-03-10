import { useEffect, useState } from "react"
import { Header } from "./components/header"
import { SearchForm } from "./components/search-form"
import api from "./services/api"
import { IEmployee } from "./types/employee"
import { AccordionEmployee } from "./components/accordion-employee"
import { LoadingSkeleton } from "./components/loading-skeleton"
import { TableEmployee } from "./components/table-employee"
import { AccordionHeaderEmployee } from "./components/accordion-header-employee"

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [search, setSearch] = useState('')
  const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getEmployees() {
    setIsLoading(true)
    try {
      const response = await api.get('/employees')
      setEmployees(response.data)
    }
    catch (error) {
      console.error('Erro ao buscar funcionários:', error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getEmployees()
  }, [])


  useEffect(() => {
    const filtered = employees.filter((employee) =>
      [employee.name, employee.job, employee.phone].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredEmployees(filtered);
  }, [search, employees]);


  return (
    <div className="flex flex-col bg-gray h-screen">
      <Header />
      <main className="flex-1 flex flex-col gap-5 p-6 lg:px-8 lg:py-11 lg:gap-11">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
          <h1>
            Funcionários
          </h1>
          <SearchForm
            search={search}
            setSearch={setSearch}
          />
        </div>
        {
          isLoading ? (
            <LoadingSkeleton />
          ) : (
            <div className="bg-white rounded-lg w-full overflow-hidden">
              <AccordionHeaderEmployee />
              {
                filteredEmployees ? (
                  filteredEmployees.map((employee) => (
                    <AccordionEmployee
                      key={employee.id}
                      {...employee}
                    />
                  ))
                ) : (
                  employees.map((employee) => (
                    <AccordionEmployee
                      key={employee.id}
                      {...employee}
                    />
                  ))
                )
              }
              <TableEmployee
                employees={filteredEmployees ? filteredEmployees : employees}
              />
            </div>
          )
        }
      </main>
    </div>
  )
}

export default App
