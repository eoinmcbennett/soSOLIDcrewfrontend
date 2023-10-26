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

    app.get('/deliveryemployee/:id', async (req: Request, res: Response) => {
        let data: DeliveryEmployee

        try {
            data = await deliveryEmployeeService.getDeliveryEmployee(req.params.id, req.session.token)
        } catch (error) {
            console.error(error)
        }

        res.render('view-delivery-employee', { employee: data })
    })

}


