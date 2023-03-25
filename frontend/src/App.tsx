import { ToastContainer } from "react-toastify"
import { ContactsProvider } from "./contexts/contactsContext"
import { UserProvider } from "./contexts/userContext"
import { RoutesMain } from "./routes"
import { GlobalStyles } from "./styles"

function App() {


  return (
    <>
      <UserProvider>
        <ContactsProvider>


          <GlobalStyles />
          <RoutesMain />
          <ToastContainer />
        </ContactsProvider>
      </UserProvider>
    </>

  )
}

export default App
