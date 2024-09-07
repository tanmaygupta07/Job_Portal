export const lastVisit = (req, res, next) => {
    if (req.cookies.lastVisit) {
        req.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }
    else {
        res.cookie("lastVisit", new Date().toISOString(), {
            maxAge: 1 * 60 * 60 * 1000
        })
    }
    next();
}