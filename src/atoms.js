import { atom, selector } from "recoil"

 export const networkAtom=atom({
  key:"networkAtom",
  default: 102
 })

 export const jobAtom=atom({
  key:"jobAtom",
  default: 0
 })
 export const notifficationAtom=atom({
  key:"notifficationAtom",
  default: 12
 })

 export const messegeAtom=atom({
  key:"messegeAtom",
  default: 0
 })


 export const allCount=selector({
    key:"allCount",
    get: ({get})=>{
        const job= get(jobAtom);
        const messege= get(messegeAtom);
        const notiffication= get(notifficationAtom);
        const network= get(networkAtom);

        return job+messege+notiffication+network;
    }
 })