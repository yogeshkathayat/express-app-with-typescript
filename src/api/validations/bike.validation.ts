
const { body } = require("express-validator/check");


const bikeValidation = (method: string) => {
    switch (method) {
        case "add": {
            return [
                body("name", "userName doesn't exists").exists(),
                body("purchaseDate", "purchaseDate doesn't exists").exists(),
                // body("email", "Invalid email").exists().isEmail(),
                // body("phone").optional().isInt(),
                // body("status").optional().isIn(["enabled", "disabled"])
            ];
        }
    }
};
export default bikeValidation;