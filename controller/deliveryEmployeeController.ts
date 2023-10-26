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

    app.get('/create-delivery-employee', async (req: Request, res: Response) =>{
        res.render("create-delivery-employee")
    })

    app.post("/create-delivery-employee", async (req: Request, res: Response) => {
        let data: DeliveryEmployee = req.body
        let id: Number

        console.log(data)
        try {
            id = await deliveryEmployeeService.createDeliveryEmployee(data, req.session.token)
            console.log(id)
            res.redirect("/deliveryemployee/" + id)
        }catch (e) {
            console.error(e);
            res.locals.errormessage = e.message;
            res.render("create-delivery-employee",data)
        }
    })
}
