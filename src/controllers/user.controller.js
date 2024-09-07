import UserModel from "../models/user.model.js";

export default class UserController {
    //renser user login
    getLogin = (req, res, next) => {
        res.render("user-login", { errors: null });
    }

    //add new user
    addUser = (req, res) => {
        UserModel.addUser(req.body);
        res.redirect('/login');
    }

    //user login
    userLogin = (req, res) => {
        console.log('Request Body:', req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            return res.render("404", { msg: "Missing email or password" });
        }
        
        const userToValidate = UserModel.validateLogin(req.body);
        if (!userToValidate) {
            res.render("404", { msg: "User not found. Please register to continue." })
        }

        if (userToValidate.email === email && userToValidate.password === password) {
            req.session.user = userToValidate;
            res.redirect("/jobs");
        }
        else {
            res.render("404", { msg: "Invalid credentials" })
        }
    }

    //logout user
    userLogout = (req, res) => {
        req.session.user = null;
        res.clearCookie("lastVisit");
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/user/login');
            }
        })
    }
}