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

    app.get('/delete-delivery-employee', async(req: Request, res:Response) => {
        res.render('delete-delivery-employee',{ deliveryEmployees: await deliveryEmployeeService.getDeliveryEmployees(req.session.token) })
    })

    app.post("/delete-delivery-employee",async(req: Request,res:Response) => {
        let employeeId: number = req.body.employeeId;
        try {
            await deliveryEmployeeService.deleteDeliveryEmployee(employeeId,req.session.token);
            res.locals.successmessage = "Sucessfully Deleted Delivery Employee"

            res.render("delete-delivery-employee",{ deliveryEmployees: await deliveryEmployeeService.getDeliveryEmployees(req.session.token) })
        } catch(e){
            res.locals.errormessage = e.message
            res.render("delete-delivery-employee",{ deliveryEmployees: await deliveryEmployeeService.getDeliveryEmployees(req.session.token) })
        }
    })

}


