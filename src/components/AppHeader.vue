<template>
  <header class="header" id="header">
    <div class="content">
      <a href="#">Page<span class="span">Marketing</span></a>
      <nav class="navbar">
        <li class="link">
          <a href="#home">
            <font-awesome-icon icon="user" /> <span>area do aluno</span></a
          >
        </li>
      </nav>
    </div>
  </header>
  <section class="home">
    <div class="container" id="home-container">
      <div class="home-content">
        <h2>
          Lorem ipsum dolor sit amet, consectetur
          <span class="span"> adipisicing elit. </span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form action="" id="form-register">
          <div>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Nome completo"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              required
            />
          </div>
          <input class="btn" type="submit" value="Cadastre-se já" />
          <p class="reserved">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  position: relative;
  padding: 3rem 3rem;
}

.header {
  background: transparent;
  padding: 2rem 3rem;
  backdrop-filter: blur(5rem);
  position: fixed;
  min-width: 100vw;
  border-bottom: 0.1rem solid #7a7a7a;
  z-index: 99999;
}

.span {
  color: #af9b51;
  font-weight: 700;
}

.content {
  display: flex;
  justify-content: space-between;
}

.link a {
  padding: 0.8rem 1.5rem;
  border-radius: 0.8rem;
  background: transparent;
  border: 0.1rem solid #af9b51;
  transition: 0.5s;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
}

.link a:hover {
  background: #af9b51;
}

.home {
  height: 100vh;
  position: relative;
  width: 100vw;
  background-image: url("../assets/home_bg.png");
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

.home .home-content {
  display: block;
}

.home .home-content p {
  color: #c5c5c5;
  margin-top: 0.5rem;
}

.home .home-content h2 {
  color: #eee;
  font-size: 1.8rem;
}

#form-register {
  margin-top: 2rem;
}

#form-register input {
  padding: 0.8rem 1rem;
  border: none;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  width: 60%;
}

#form-register input:focus {
  color: #af9b51;
}

#form-register .btn {
  background: #af9b51;
  color: #eee;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.4s;
}

#form-register .btn:hover {
  background: #917c33;
}

#form-register .reserved {
  font-size: 0.75rem;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }
  .navbar span {
    display: none;
  }
  .link a {
    padding: 0.8rem 2rem;
    border-radius: 0.8rem;
    font-size: 0.8rem;
  }
  .home {
    height: 100%;
  }
  .home .home-content {
    margin-top: 8.5rem;
  }
  .home .home-content p {
    color: #c5c5c5;
    margin-top: 0.5rem;
  }

  .home .home-content h2 {
    color: #eee;
    font-size: 1.2rem;
  }
  .home #home-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 0;
  }
  #form-register input[data-v-bb50a5e4] {
    width: 100%;
  }
}
</style>
