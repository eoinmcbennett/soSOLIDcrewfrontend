import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";

const deliveryEmployeeService = require('../service/deliveryEmployeeService')

module.exports = function(app: Application){

    app.get('/deliveryemployee', async(req: Request,res:Response) =>{
        let data: DeliveryEmployee[];

        try {
            data = await deliveryEmployeeService.getDeliveryEmployees()
            console.log(data);
        } catch (e) {
            console.log(e);
        }
        console.log("Hello world");

        res.send(data);
    })


    app.get('/updatedeliveryemployee', async(req: Request,res:Response) =>{
        let data: DeliveryEmployee;

        try {
            data = await deliveryEmployeeService.getDeliveryEmployees()
            console.log(data);
        } catch (e) {
            console.log(e);
        }
        console.log("Hello world");

        res.send(data);
    })

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


