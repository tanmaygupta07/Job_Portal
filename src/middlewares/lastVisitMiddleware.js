export const lastVisit = (req, res, next) => {
    if (req.cookies.lastVisit) {
        req.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }
    else {
        res.cookie("lastVisit", new Date().toLocaleString(), {
            maxAge: 1 * 60 * 60 * 1000
        })
    }
    next();
}