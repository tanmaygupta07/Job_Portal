import express from 'express'
import path from 'path';
import expressLayouts from "express-ejs-layouts";
import userRouter from './src/routes/user.route.js'
import jobRouter from './src/routes/job.router.js';
import session from 'express-session';
const app = express();

app.use(
    session({
        secret: "ItIsASecretKey", //you can keep anything as your secret key
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve('./', 'public')));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join('./', 'views'));

app.get('/', (req, res) => {
    res.render("landing-page", { user: req.session.user });
});

app.get('/404', (req, res) => {
    res.render("404", { msg: "HI" });
});

app.use('/user', userRouter);
app.use('/jobs', jobRouter);

export default app;