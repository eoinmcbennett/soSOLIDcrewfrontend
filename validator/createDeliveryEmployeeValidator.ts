import { DeliveryEmployee } from "../model/deliveryEmployee";

module.exports.validateDeliveryEmployee = (deliveryEmployee: DeliveryEmployee) : string |null => {

    if(deliveryEmployee.salary <= 0){
        return "Salary is zero or less";
    }

    return null;
}