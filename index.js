import express from 'express'
import path from 'path';
import userRouter from './src/routes/user.route.js'
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
app.set('view engine', 'ejs');
app.set('views', path.join('./', 'views'));

// app.get('/', (req, res) => {
//     res.render('layout');
// });

app.use(userRouter);

export default app;