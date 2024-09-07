export const auth = (req, res, next) => {
    if (req.session.user) {
        next();
    }
    else {
        res.render("404", { msg: "Only Recruiters are allowed to access this page. Please login to continue." })
    }
};