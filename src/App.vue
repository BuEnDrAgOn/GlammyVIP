<template>
  <div id="app" >
    <header id="header">
        <div class="wrap">
            <div id="logo">
                <span class="gear">S</span>
                <h3>Cuenta</h3>
            </div>
             
            <nav id="menu">
                <ul>
                    <li>
                        <a href="index">INICIO</a>
                    </li>
                    <li>
                        <a href="services">SERVICIOS</a>
                    </li>
                    <li>
                        <a @click="citasPage()">CITAS</a>
                    </li>
                    <li>
                        <a @click="loginPage">{{this.user.name}}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <router-view/>
     <footer id="footer">
                <div class="wrap">
                    <div class="menu-footer">
                        <h5>MENÚ</h5>
                        <ul>
                            <li>
                                <a href="#">INICIO</a>
                            </li>
                            <li>
                                <a href="#">CONTACTO</a>    
                            </li>
                        </ul>
                    </div>

                    <div id="location">
                        <h5>¿DONDE ESTAMOS?</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.7455925478534!2d-100.1536837!3d25.6465678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c2314b751223%3A0xff5ba01e049e2adc!2sC.%20Monte%20Santo%20267%2C%20Residencial%20Monteverde%2C%2067257%20Ju%C3%A1rez%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1697414108658!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>   
  </div>
</template>

<script>

export default {
    data(){
        return{
            user:{
                name: "LOGIN"
            }
        }
    },
    methods:{
        loginPage(){
            this.$router.push({
                name:"Login",
                params:{ user: "LOGIN", location:location.replace("login") }
            })
        },
        citasPage(){
            this.user.name == "LOGIN" ? 
            this.$router.push({
                name:"Login"
            })
            : this.$router.push({
                name: "Citas"
            })
        }
    },
    created(){
        localStorage.getItem(1) == null ?
        this.user.name = "LOGIN" :
        this.user.name = localStorage.getItem(1)
    }
}
</script>

<style>
/* @import url(@/assets/css/font-awesome.min.css); */

a{
    cursor: pointer;
}

@font-face {
    font-family: "TrebuchetMS";
    src: url(@/assets/fonts/TrebuchetMS.ttf);
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "BebasNeue";
    src: url(@/assets/fonts/BebasNeue.otf);
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "WebSymbolsRegular";
    src: url(@/assets/fonts/websymbols-regular-webfont.eot);
    src: url(@/assets/fonts/websymbols-regular-webfont.eot#iefix) format("embedded-opentype"),
         url(@/assets/fonts/websymbols-regular-webfont.woff) format("woff"),
         url(@/assets/fonts/websymbols-regular-webfont.ttf) format("truetype"),
         url(@/assets/fonts/websymbols-regular-webfont.svg#WebSymbolsRegular) format("svg");
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "Agnetta";
    src: url(@/assets/fonts/Agnetta.ttf) format("truetype");
    font-style: normal;
    font-weight: normal;
}
@font-face {
  font-family: 'FontAwesome';
  src: url('@/assets/fonts/fontawesome-webfont.eot?v=4.7.0');
  src: url('@/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('@/assets/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('@/assets/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('@/assets/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('@/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

/* Generales */

body{
    line-height: normal !important;
}
ul{
    padding: 0px !important;
}

*, *::after, *::before{
    box-sizing: content-box !important;
    font-weight: initial;
}

*{
    padding: 0px;
    margin: 0px;
    /* list-style-position: inside; */
    /* cursor:grab */
}

/* *:active{
        cursor: grabbing;
} */

*:focus{
    outline: none;
}

*::-webkit-scrollbar{
    width: 20px;
    border: 1px #ccc;
    border-style: groove;
    border-radius: 10px 5px 5px 10px;
    background-image: url(@/assets/img/pxgray.png);
}
*::-webkit-scrollbar-thumb{
    width: 10px auto;
    background-color: rgba(85, 85, 85, 0.534);
    border-radius: 20px;
    box-shadow: 1px 1px 1px #333 ;
}
*::-webkit-scrollbar-thumb:active{
    background-color: rgba(85, 85, 85, 0.7);
}

.clearfix{
    float: none;
    clear: both;
}

body{
    background-image: url(@/assets/img/pattern.png);
}

.wrap{
    width: 1250px;
    margin: 0px auto;
}

.gear, .icon{
    font-family: "WebSymbolsRegular";
}

/* Cabecera */
#header{
    width: 100%;
    height: 70px;
    background-color: black;
    color: white;
    font-family: "BebasNeue";
}

#logo{
    display: flex;
    float: left;
    width: 200px;
    height: 53px;
    background-color: #db57c3;
    text-align: center;
    margin-top: 8px;
    margin-left: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
}
#logo h3{
    display: flex;
    margin-top: .30rem;
    padding-left: 1rem;
    /* margin-right: 65px; */
    font-size: 40px;
    /* transition: all .3s; */
}

#logo:hover{
    border-radius: 2px;
    color: black;
    background-color: #ffaff0;
}

#logo .gear{
    display: flex;
    float: left;
    font-size: 1.875rem;
    padding-top: 0.40rem;
    margin-left: 1.625rem;
    animation-name: rotate-gear;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    /* transition: all 300ms; */
}

@keyframes rotate-gear{
    form{
        transform: rotateZ(0deg);
    }
    to{
        transform: rotateZ(360deg);
    }
}

#logo:hover .gear{
    animation: fromBellow 285ms linear;
}

@keyframes fromBellow{
    0%{
        transform: translateY(0%);
    }
    50%{
        transform: translateY(200%);
    }
    100%{
        transform: translateY(0%);
    }
}

#logo:hover h3{
    animation: fromRight 285ms linear;
}

@keyframes fromRight {
    from{
        transform: translateX(200%);
    }
    to{
        transform: translateX(0%);
    }
}

#menu{
    float: right;
    /* margin-right: 15%; */
    height: 70px;
    background-color: transparent;
}
#menu ul li{
    font-size: 24px;
    display: inline-block;
    margin: 0px 20px 0px 20px;
    letter-spacing: 1px;
    line-height: 70px;
}
#menu ul li a{
    display: block;
    color: white;
    text-decoration: none;
    transition: all 200ms;
}
#menu ul li a:hover{
    color: #db57c3;
    transform: scale(1.2, 1.2);
}

/* Banner */

#banner{
    display: flex;
    align-items: center;
    width: 95.5%;
    height: 100px;
    border: 10px solid white;
    box-shadow: 0px 0px 2px gray;
    background-image: url(@/assets/img/19e449a1-b942-40c1-9e6c-316e0e44bf3f.png);
    /* background-repeat: none; */
    background-position: -50px -163px;
    margin: 20px auto;
    overflow: hidden;
    animation: backBanner 5.71s linear;
}

@keyframes backBanner{
    0%{
        background-position: 0px 0px;
    }
    100%{
        background-position: -50px -163px;
    }
}

#banner h1{
    display: block;
    font-weight: 900 !important; 
    color: white;
    font-size: 4rem;
    font-weight: normal;
    letter-spacing: 2px;
    margin: 27px auto;
    text-shadow: 2px 2px 1px black;
    animation: showText 5.71s linear;
    font-family: "Agnetta";
}

@keyframes showText {
    0%{
        transform: translateX(-600%) scale(5,5);
        opacity: 1;
    }
    50%{
        transform: translateX(600%) scale(5,5);
        opacity: 1;
    }
    75%{
        transform: translateX(-600%) scale(5,5);
        text-shadow: none;
        color:transparent;
        opacity: 0;
    }
    100%{
        transform: translateX(0%) scale(1,1);
        text-shadow: 2px 2px 1px black;
        color:transparent;
        opacity: 1;
    }
}

/* Tarjetas */
#info{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.card{
    float: left;
    width: 205px;
    height: 305px !important;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #ddd;
    background-color: white;
    overflow: hidden;
    margin: 22px;
    margin-top: 40px;
    cursor: pointer;
    transition: all 300ms;
}


.card:hover{
    background-color: black;
}


.card:last-child{
    margin-right: 0px;
}

.card a{
    text-decoration: none;
    color: black;
}

.card .icon{
    display: block;
    width: 100%;
    height: 130px;
    font-size: 50px;
    line-height: 110px;
    text-align: center;
    margin: 0px auto;
    transition: all 300ms;
}

.card:hover .icon{
    font-size: 70px;
    color: #db57c3;
    animation: showIcon 300ms linear;
}

@keyframes showIcon {
    from{
        transform: translateY(-200%);
    }
    to{
        transform: translateY(0%);
    }
}

.card .category{
    width: 100%;
    height: 50px;
    font-family: "TrebuchetMS";
    font-size: 21px;
    font-weight: bold;
    text-align: center;
    color: #d11ab0;
    transition: all 300ms;
}

.card:hover .category{
    color: white;
    animation: showCategory 400ms linear;
}

@keyframes showCategory {
    from{
        transform: translateY(-300%);
        color: black;
    }
    to{
        transform: translateY(0%);
        color: white;
    }
}

.card .description{
    text-align: center;
    color: #d11ab0;
    font-family: "TresbuchetMS";
    font-size: 15px;
    padding: 10px;
    transition: all 300ms;
}

.card:hover .description{
    color: white;
    animation: showDescription 400ms linear;
}

@keyframes showDescription {
    from{
        transform: translateX(-300%);
        color: black;
    }
    to{
        transform: translateX(0%);
        color: white;
    }
}

/* Barra lateral */

#lateral{
    width: 300px;
    min-height: 1200px;
    font-family: "TrebuchetMS";
    float: right;
    margin: 20px;
}

aside h3{
    display: block;
    width: auto;
    height: 45px;
    line-height: 49px;
    background: url(@/assets/img/pxgray.png), white;
    box-shadow: 0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f;
    font-size: 30px;
    font-family: "BebasNeue";
    font-weight: normal;
    letter-spacing: 2px;
    padding-left: 15px;
    margin-top: 30px;
    margin-bottom: 15px;
}

aside h3:first-child{
    margin-top: 0px;
}

#search{
    width: 90%;
    height: 30px;
    margin: 10px auto;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #ccc inset;
}

#lateral input[type=text]{
    width: 85%;
    height: 32px;
    border: none;
    padding-left: 5px;
    border-radius: 5px;
    background-color: transparent;
    color: #ccc;
    transition: all 300ms;
}

#lateral input[type=text]:focus{
    color: #555;
    box-shadow: 1px 1px 1px grey inset;
}

#lateral input[type=button],
#lateral input[type=submit]{
    height: 30px;
    cursor: pointer;
    font-size: 16px;
    background-color: transparent;
    border: none;
    border-left: 1px solid #ccc;
    color: #555;
    padding-left: 6px;
}

.aside-box{
    width: 90%;
    height: 240px;
    margin: 0px auto;
    margin-top: 20px;
    padding-top: 2px;
    background-color: white;
    /* border: 1px solid black; */
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3), 0px 3px 7px rgba(0, 0, 0, 0.3), 0px 1px white inset, 0px -3px 2px rgba(0, 0, 0, 0.3) inset;
}

#login input[type=email],
#login input[type=password]{
    display: block;
    margin: 0px auto;
    margin-top: 20px;
    padding-left: 35px;
    width: calc(95% - 35px);
    height: 30px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #ccc inset;
    border-radius: 5px;
    color: #ccc;
}

#login input[type=email]:focus,
#login input[type=password]:focus{
    color: #555;
    box-shadow: 1px 1px 1px grey inset;
}

#login #user, #login #password{
    display: block;
    position: absolute;
    text-align: center;
    margin-left: 15px;
    margin-top: 6px;
    height: 30px;
}

#login #password{
    margin-left: 18px;
    margin-top: 25px;
    font-size: 20px;
}

#login input[type=button],
#login input[type=submit],
#login input[type=reset],
#login button{
    /* float: left; */
    /* display: block; */
    text-align: center;
    width: 100px;
    height: 35px;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    color: white;
    background: linear-gradient(to bottom, #3eb8e5 0%, #2ca0ca 100%);
    border: 1px solid #156785;
    border-radius: 0px;
    cursor: pointer;
    font-size: 15px;
    font-family: "TrebuchetMS";
    font-weight: lighter;
    transition: all 300ms;
}

#login input[type=button]:hover,
#login input[type=submit]:hover,
#login input[type=reset]:hover,
#login button:hover{
    box-shadow: 0px 0px 3px gray inset;
}

#login a{
    display: block;
    text-decoration: none;
    margin-left: 18px;
    color: #555;
}

#login a:hover{
    text-decoration: underline;
    color: #2f78bc;
}

#social{
    height: 190px;
}

#social a{
    display: block;
    color: #333;
    text-decoration: none;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
}

#social div .overlay{
    display: block;
    height: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0px 0px 1px #ccc;
    border: 3px solid white;
    box-shadow: 0px 0px 4px #ccc;
    background-color: #f4f7fe;
    position: absolute;
    padding: 5px;
    margin-left: 70px;
    margin-top: -52px;
    cursor: pointer;
    transform: translateX(-80%);
    opacity: 0;
    transition: all 400ms;
}

#social div:hover .overlay{
    opacity: 1;
    transform: translateX(0%);
    color: #2f78bc;
}
#social div:hover a{
    color:#00538c
}

#social div:hover:last-child a{
    color: red;
}
#social div:hover:last-child .overlay{
    color:red
}
#social div:hover #twitter{
    color: #3eb8e5;
}

#social div:hover #twitter-text{
    color: #3eb8e5;
}
/* Artículos */
#articles{
    width: 860px;
    float: left;
}

#articles h2{
    display: block;
    width: 100%;
    height: 75px;
    line-height: 75px;
    text-align: center;
    font-family: "BebasNeue";
    font-size: 40px;
    font-weight: normal;
    letter-spacing: 2px;
    background: url(@/assets/img/pxgray.png), white;
    box-shadow: 0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 15px;
}

#articles article{
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    margin: 40px auto;
    padding: 10px;
    font-family: "TrebuchetMS";
    background-color: white;
    color: black;
    box-shadow: 1px 1px 2px #ddd;
}

#articles article h4{
    display: block;
    font-size: 23px;
        margin: 3px;
}

#articles article h4 a{
    text-decoration: none;
    color: #00538c;   
}

#articles article h4 a:hover{
    text-decoration: underline;
}

#articles .data{
    float: right;
    background: #393d3f;
    color: white;
    height: 30px;
    line-height: 30px;
    margin: -10px;
    padding: 4px;
    font-size: 13px;
    border-radius: 0px 0px 0px 5px;
}

#articles .data span{
    margin: 6px;
}

#articles article p{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
}

#blog{
    height: 100px;
    margin-top: 60px;
    line-height: 100px;
    text-align: center;
    font-family: "BebasNeue";
    transition: all .57s;
}

#blog a{
    display: block;
    font-family: "BebasNeue";
    font-size: 40px;
    letter-spacing: 3px;
    color: #00538c;
    text-decoration: none;
    transition: all .57s;
}

#blog:hover{
    border: 10px solid #37bcf9;
    border-radius: 240px;
    box-shadow: 0px 0px 10px gray;
    background-color: #333;
    animation: blink 5.71s linear infinite;
}

#blog:hover a{
    text-shadow: 1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black;
    color:white
}

@keyframes blink {
    0%{
        border: 10px solid #37bcf9;
    }
    25%{
        border: 10px solid green;
    }
    50%{
        border: 10px solid yellow;
    }
    75%{
        border: 10px solid white;
    }
    100%{
        border: 10px solid #37bcf9;
    }
}

#footer{
    width: 100%;
    height: 450px;
    background-color: black;
    color: white;
    overflow: hidden;
    position: relative;
    bottom: 0;
}

#footer .wrap{
    display: flex;
    justify-content: center;
}
#footer .wrap > div{
    width: 30%;
    height: 22.5rem;
    margin: 2.5rem;
    text-align: center;
    color: white;
    font-family: "TrebuchetMS";
}

#footer a{
    text-decoration: none;
    color: #ff8fab;
    transition: all 300ms;
}
#footer h5{
    display: block;
    background: url(@/assets/img/pxgray.png), white;
    height: 50px;
    letter-spacing: 2px;
    text-align: center;
    font-family: "BebasNeue";
    font-size: 40px;
    line-height: 55px;
    color: black;
    border-radius: 5px;
    margin-bottom: 15px;
}

#footer ul{
    text-align: left;
    margin: 20px;
    font-size: 25px;
}

#footer ul li{
    margin-top: 10px;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    transition: all 300ms
}

#footer ul li a{
    display: block;
    height: 40px;
}

#footer ul li:hover a{
    padding-left: 40px;
    color: white;
    width: 100%;
}

#footer iframe{
    width: 100%;
    height: 300px;
    margin-top: 10px;
    border-radius: 5px;
    border: 5px solid white;
    box-shadow: 0px 0px 5px gray;
    /* cursor: grab; */
}

#footer img{
    margin-bottom: 15px;
}

#footer #browsers img{
    width: 45px;
}

.back-to-top{
    position: fixed;
    background-color: #d11ab0;
    color: #fff !important;
    display: inline-block;
    width: 44px;
    height: 44px;
    text-align: center;
    line-height: 2.5;
    font-size: 16px;
    border-radius: 50%;
    right: 15px;
    bottom: 15px;
    -moz-transition: background .5s;
    -webkit-transition: background .5s;
    transition: background .5s;
    z-index: 1;
}

.back-to-top:hover{
    color: white;
}

#citas, #citas-precio{
    width: 70%;
}

#citas th, #citas td{
    width: 33%;
}

#wrap-citas{
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    justify-content: space-between;
    min-height: 48.6vh;
}

.wrap-content{
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
}


</style>
