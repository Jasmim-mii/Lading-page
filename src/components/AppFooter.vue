<template>
  <section id="footer">
    <div class="container">
      <div class="container-footer">
        <div class="footer-logo">
          <h4>Page<span>Marketing</span></h4>
        </div>
        <div class="terms-politic-footer">
          <p>Todos os diretiros são reservados</p>
          <p>Politica de privacidade</p>
        </div>
        <div class="info-footer">
          <p>&copy; 2023 Page<span>Marketing</span>, Inc.</p>
          <p class="credits">Created for Developer Michele Jasmim</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  border-top: 0.1rem solid #7a7a7a;
}

.container-footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.terms-politic-footer p,
.info-footer .credits {
  font-size: 0.798rem;
}

.info-footer .credits {
  cursor: pointer;
}

.info-footer {
  text-align: center;
}

.info-footer span,
.footer-logo span {
  color: #af9b51;
}

.footer-logo {
  text-align: right;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }

  .container-footer {
    display: block;
  }
  .terms-politic-footer,
  .info-footer .credits {
    font-size: 0.798rem;
    text-align: center;
    padding-bottom: 0.8rem;
  }
  .footer-logo {
    text-align: center;
    padding-bottom: 0.8rem;
  }
}
</style>
