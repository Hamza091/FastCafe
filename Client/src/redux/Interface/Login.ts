import { Interface } from "readline";

export interface Ilogin {
    
    fname?:string,
    lname?:string,
    email?:string,
    password?:string,
    admin?:boolean,
    success:boolean
}