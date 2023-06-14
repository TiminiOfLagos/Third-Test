import { useState } from "react"
import UserInput from './Component/UserInput'
import UserOuput from './Component/UserOutput'


const App = () => {
   const [username, setUserName] = useState("Wandecoal")
   const [currentValue, setCurrentValue] = useState("")


   const deleteInputInfo = (e) => {
    setUserName(e.target.value)
    setCurrentValue(e.target.value)
   }

   return(
    // Rendering the created component
    <div>
        <UserOuput username= {username}></UserOuput>
        <UserInput changeUsername = {deleteInputInfo} changeValue = {currentValue}></UserInput>
    </div>
   )
}



export default App