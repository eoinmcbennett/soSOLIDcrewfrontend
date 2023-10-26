import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";

const deliveryEmployeeService = require('../service/deliveryEmployeeService')

module.exports = function(app: Application){

    app.get('/get-all-delivery-employee', async(req: Request,res:Response) =>{
        let deliveryEmployees: DeliveryEmployee[];

        try {
            deliveryEmployees = await deliveryEmployeeService.getAllDeliveryEmployees(req.session.token)
        } catch (e) {
            console.log(e);
        }
        res.render('all-delivery-employees', {deliveryEmployees: deliveryEmployees})
    })

}


