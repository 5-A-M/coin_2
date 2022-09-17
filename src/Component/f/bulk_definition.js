import axios from "axios"
import { SERVER_URL } from "../config/config"

const bulk_definition= ()=> {
    axios({
        url: `${SERVER_URL}/bulk/definition`,
        params: {
            
        }
    })
}

export default bulk_definition