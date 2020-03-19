import Axios from "axios"

export default () => {
  // __API__ = http://api.service.com
  return Axios.create({baseURL: "http://api.tarabees.com//api"})
}