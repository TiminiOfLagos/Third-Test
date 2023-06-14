import React from "react"


const UserInput = (prop) => {
        return (
            // Input tag to be rendered created inside the UserInput component
            <div>
                <input type="text" onChange={prop.changeUsername} value={prop.changeValue}/>
            </div>
          )
    }


export default UserInput