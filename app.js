const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const sessionStore = require('./session/sessionStore');
const sequelize = require('./db/index');
const methodOverride = require('method-override');

const app = express();

//rutas
const routes_home = require('./routes/home/routes_home');
const routes_login = require('./routes/login/routes_login')
const routes_singup = require('./routes/singUp/routes_signup')
const routes_profile = require('./routes/profile/routes_profile')
const routes_loguot = require('./routes/logout/routes_loguot')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
 secret: 'your_secret_key',
 store: sessionStore,
 resave: false,
 saveUninitialized: false,
 cookie: {
 maxAge: 60 * 60 * 1000 // 1 hora
 }
}));

// Sincronizar la base de datos
sequelize.sync();

app.set('view engine', 'ejs');
app.set('views', './views');


// Rutas
app.use('/', routes_home); 
app.use('/login', routes_login);
app.use('/signup', routes_singup);
app.use('/profile',routes_profile);
app.use('/logout',routes_loguot);
const path = require('path');

app.use(methodOverride('_method'))

//
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto',process.env.PORT || 3000)

const PORT = process.env.PORT || 3000;
app.listen( app.get('puerto'), async()=>{ 
    const ports = app.get('puerto')
    console.log(`Server: http://localhost:${app.get('puerto')}/`)
    await sequelize.sync({force: false})
    .then(()=>{
        console.log("DB Online with Sequelize");
    })
    .catch((error)=>{
        console.log("Error Al conectarse ", error);
    })

})