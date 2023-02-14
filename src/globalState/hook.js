import { useContext } from "react";
import {GlobalContext} from './store'
export const useTodolist =()=>useContext(GlobalContext)