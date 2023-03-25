import { ToastContainer } from "react-toastify"
import { UserProvider } from "./contexts/userContext"
import { RoutesMain } from "./routes"
import { GlobalStyles } from "./styles"

function App() {


  return (
    <>
      <UserProvider>

        <GlobalStyles />
        <RoutesMain />
        <ToastContainer />
      </UserProvider>
    </>

  )
}

export default App
