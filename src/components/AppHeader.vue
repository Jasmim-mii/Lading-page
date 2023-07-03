<template>
    <header class="header container" id="header">
        <div class="content">
            <a href="#">Page<span class="span">Marketing</span></a>
            <nav class="navbar">
                <li class="link"><a href="#home"> <font-awesome-icon icon="user" /> area do aluno</a></li>

            </nav>
        </div>
    </header>
    <section class="home">
        <div class="container" id="home-container">
            <div class="home-content">
                <h2>Lorem ipsum dolor sit amet, consectetur <span class="span"> adipisicing elit. </span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <form action="" id="form-register">
                    <div>
                        <input type="text" name="fullName" id="fullName" placeholder="Nome completo" required>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Digite seu email" required>
                    </div>
                    <input class="btn" type="submit" value="Cadastre-se já">
                    <p class="reserved">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </form>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
    position: relative;
    padding: 2rem 3rem;
}

.header {
    background: transparent;
    backdrop-filter: blur(5rem);
    position: fixed;
    min-width: 100%;
    border-bottom: .1rem solid #7a7a7a;
    z-index: 99999;
}

.span {
    color: #AF9B51;
    font-weight: 700;
}

.content {
    display: flex;
    justify-content: space-between;
}

.link a {
    padding: .8rem 1.5rem;
    border-radius: .8rem;
    background: transparent;
    border: .1rem solid #AF9B51;
    transition: .5s;
    font-size: .89rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
}

.link a:hover {
    background: #AF9B51;
}

.home {
    height: 100vh;
    position: relative;
    background-image: url('../assets/home_bg.png');
    background-repeat: no-repeat;
    background-position-y: center;
    /* background-size: cover; */
    /* background-position: center; */
    background-attachment: fixed;


}

.home #home-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 0;
}

.home .home-content p {
    color: #c5c5c5;
    margin-top: .5rem;
}

.home .home-content h2 {
    color: #eee;
    font-size: 1.8rem;
}

#form-register {
    margin-top: 2rem;
}

#form-register input {
    padding: .8rem 1rem;
    border: none;
    margin-bottom: 1rem;
    border-radius: .2rem;
    width: 60%;
}

#form-register input:focus {
    color: #AF9B51
}

#form-register .btn {
    background: #AF9B51;
    color: #eee;
    font-size: .75rem;
    font-weight: 550;
    transition: .4s;
}

#form-register .btn:hover {
    background: #917c33;
}

#form-register .reserved {
    font-size: .75rem;
}</style>