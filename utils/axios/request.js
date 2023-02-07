import axios from "axios";
import { MAIN_SERVER_URL } from "../constants";

export default axios.create({ baseURL: MAIN_SERVER_URL });
