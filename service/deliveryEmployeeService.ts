import { DeliveryEmployee } from "../model/deliveryEmployee";

const axios = require('axios');

 module.exports.getDeliveryEmployees = async function (){
    try{
        const response = await axios.get('http://localhost:8080/api/employees/delivery')

        console.log(response)
        return response.data
    }catch(e){
        return new Error('Could not get Delivery Employees')
    }
}
    
    module.exports.createDeliveryEmployee = async function (deliveryEmployee: DeliveryEmployee, token:string ){
        
        try{
                const response = await axios.post('http://localhost:8080/api/employees/delivery', deliveryEmployee, {params: { token: token}})
                console.log(response)
                return response.data
            }catch(e){
                throw new Error('Could not create Delivery Employee')
            }
        }
    

