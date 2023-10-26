
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