import { Header } from "./components/header"
import { SearchForm } from "./components/search-form"

function App() {

  return (
    <div className="flex flex-col bg-gray h-screen">
      <Header />
      <main className="flex-1 flex flex-col gap-6 p-6">
        <h1>
          Funcionários
        </h1>
        <SearchForm />
      </main>
    </div>
  )
}

export default App
