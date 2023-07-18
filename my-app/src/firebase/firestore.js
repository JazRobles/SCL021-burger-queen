import {  db} from "./firebase.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

async function fireData(order) {
  try {
    const docRef = await addDoc(collection( db, "users"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {console.log(e)}

}
//trae la base de dato de firebase a la vista de la cocina
async function traeData(){
  const orderKitchen = []
const querySnapshot = await getDocs(collection( db, "users"));
querySnapshot.forEach((doc) => {
  
  orderKitchen.push(doc.data())
})
return orderKitchen
}

export {fireData, traeData};