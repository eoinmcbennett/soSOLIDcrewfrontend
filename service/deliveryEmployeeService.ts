import { DeliveryEmployee } from "../model/deliveryEmployee";
import { DeliveryEmployeeUpdateRequest } from "../model/deliveryEmployeeUpdateRequest";

const axios = require('axios');

 module.exports.getDeliveryEmployees = async function (){
    try{
        const response = await axios.get('http://localhost:8080/api/employees/delivery')

        return response.data
    }catch(e){
        return new Error('Could not get Delivery Employees')
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


module.exports.updateDeliveryEmployee = async (id: string, deliveryEmployee: DeliveryEmployeeUpdateRequest, token: string): Promise<DeliveryEmployeeUpdateRequest> => {
    try {

        const response = await axios({
            method: 'put',
            url: 'http://localhost:8080/api/employees/delivery/'+id,
            data: deliveryEmployee,
            params: {token: token}
        })

        return response.data
    } catch {
        throw new Error('Could not update delivery employee')
    }
}