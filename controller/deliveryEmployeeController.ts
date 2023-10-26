import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";
import { DeliveryEmployeeUpdateRequest } from "../model/deliveryEmployeeUpdateRequest";

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

    app.get('/deliveryemployee/:id', async (req: Request, res: Response) => {
        let data: DeliveryEmployee

        try {
            data = await deliveryEmployeeService.getDeliveryEmployee(req.params.id, req.session.token)
        } catch (error) {
            console.error(error)
        }

        res.render('view-delivery-employee', { employee: data })
    })


    app.get('/updatedeliveryemployee/:id', async (req: Request,res:Response) =>{
        let data: DeliveryEmployee;

        try {
            data = await deliveryEmployeeService.getDeliveryEmployee(req.params.id, req.session.token)
            // console.log(data);
        } catch (e) {
            console.log(e);
        }
        
        res.render('update-delivery-employee', { ...data })

    })

    app.post('/updatedeliveryemployee/:id', async (req: Request,res:Response) =>{
        let data: DeliveryEmployeeUpdateRequest;
        data = req.body

        try {
            data = await deliveryEmployeeService.updateDeliveryEmployee(req.params.id, data, req.session.token)
            res.redirect('/deliveryemployee/'+req.params.id)
        } catch (e) {
            console.log(e);

            res.locals.errormessage = e
            res.render('update-delivery-employee', req.body)
        }
    })
}


