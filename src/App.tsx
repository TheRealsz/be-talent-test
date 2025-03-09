import { useEffect, useState } from "react"
import { Header } from "./components/header"
import { SearchForm } from "./components/search-form"
import api from "./services/api"
import { IEmployee } from "./types/employee"
import { AccordionEmployee } from "./components/accordion-employee"

function App() {
  const [employees, setEmployees] = useState<IEmployee[] | []>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getEmployees() {
    setIsLoading(true)
    try {
      const response = await api.get('/employees')
      setEmployees(response.data)
    }
    catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className="flex flex-col bg-gray h-full">
      <Header />
      <main className="flex-1 flex flex-col gap-5 p-6">
        <div className="flex flex-col gap-6">
          <h1>
            Funcionários
          </h1>
          <SearchForm />
        </div>
        {
          isLoading ? (
            <div className="flex-1 bg-gray-300 animate-pulse rounded-lg" />
          ) : (
            <div className="bg-white rounded-lg w-full overflow-hidden">
              <header className="w-full flex items-center p-3.5 bg-primary shadow-1 justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-white font-helvetica">
                    FOTO
                  </span>
                  <span className="text-white font-helvetica">
                    NOME
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-white" />
              </header>
              {
                employees.map((employee) => (
                  <AccordionEmployee
                    key={employee.id}
                    {...employee}
                  />
                ))
              }
            </div>
          )
        }
      </main>
    </div>
  )
}

export default App
