import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes"
import { GlobalStyles } from "./styles"

function App() {


  return (
    <>
      <GlobalStyles />
      <RoutesMain />
      <ToastContainer />
    </>

  )
}

export default App
