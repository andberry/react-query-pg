import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
const queryClient = new QueryClient()
import { SmartphonesGrid } from "./components/SmartphonesGrid"
import { useState } from "react"
import { SmartphonesGridError } from "./components/SmartphonesGridError"

function App() {
  const [status, setStatus] = useState<'grid' | 'error'>('grid') 
  return (
    <QueryClientProvider client={queryClient}>
    <div className='max-w-(--breakpoint-md) mx-auto px-4 py-16'>
      <header>
        <h1 className='text-center uppercase text-6xl font-black pt-2 pb-6'>React Query Playground</h1>
      </header>

      <div className="flex gap-4 bg-pink-700 text-white p-4 rounded-md">
        <button onClick={() => {setStatus('grid')}} className=" bg-white font-bold text-pink-600 px-3 py-2 rounded-md">Grid View</button>
        <button onClick={() => {setStatus('error')}} className="bg-white font-bold text-pink-600 px-3 py-2 rounded-md">Error View</button>
      </div>
      <section className="my-8">
        {status === 'grid' && (
          <SmartphonesGrid />
        )}
        {status === 'error' && (
          <SmartphonesGridError />
        )}
      </section>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
