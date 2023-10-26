import { DeliveryEmployee } from "../model/deliveryEmployee";

const axios = require('axios');

 module.exports.getDeliveryEmployees = async function (token:string){
    try{
        const response = await axios.get('http://localhost:8080/api/employees/delivery',{ params: { token: token  } })

        return response.data
    }catch(e){
        return new Error('Could not get Delivery Employees')
    }

}

module.exports.deleteDeliveryEmployee = async function(id:number,token:string) : Promise<boolean> {
    console.log(id)
    try {
        const response = await axios.delete("http://localhost:8080/api/employees/delivery/" + id,{ params: { token: token  } })
        return response.status == 200
    } catch(e){
        throw new Error(e.message);
    }
}

module.exports.getDeliveryEmployee = async function(id: string, token: string): Promise<DeliveryEmployee> {
    try {
        const response = await axios.get('http://localhost:8080/api/employees/delivery/'+id, { params: {token: token} })

        return response.data
    } catch {
        throw new Error('Could not get Delivery Employee')
    }
}