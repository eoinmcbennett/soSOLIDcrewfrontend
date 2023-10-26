import { Request, Response, Application } from "express";
import { Login } from "../model/login";
import { Register } from "../model/register";
const authService = require("../service/authService");
const registerValidator = require("../validator/registrationValidator")

module.exports = function(app: Application) {
    app.get("/login", async (req:Request, res: Response) => {
        res.render("login");
    })

    app.post("/login", async (req:Request, res:Response) => {
        let data: Login = req.body;

        try {
            req.session.token = await authService.login(data)

            res.redirect("/pizza");
        } catch(e) {
            console.error(e)

            res.locals.errormessage = e.message;

            res.render("login", req.body)
        }
    })

    app.get("/register",async(req:Request, res:Response) => {
        res.render("register")
    })

    app.post("/register", async(req:Request, res:Response) => {
        let data: Register = req.body;
        const error:string | null = registerValidator.validateRegister(data)

        if(error != null){
            res.locals.errormessage = error;

            res.render("register",req.body)
        }
        authService.register(data as Login);
    })

}