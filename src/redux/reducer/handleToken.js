const accessToken = ""

const handleToken = (state=accessToken, action) =>{
    const token = action.payload
    switch(action.type){
        case "SAVETOKEN":
            return {
                accessToken: token
              };
        case "REMOVETOKEN":
            return {
                accessToken: token
              };

        default:
            return state
    }
}

export default handleToken