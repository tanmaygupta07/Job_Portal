import express from 'express'
import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
app.use(express.static(path.resolve('./', 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join('./', 'views'));

app.get('/', (req, res) => {
    res.render('layout');
})

export default app;