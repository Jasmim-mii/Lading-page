<template>
    <section id="footer">
        <div class="container">
            <div class="container-footer">
                <div class="terms-politic-footer">
                    <p>Todos os diretiros são reservados</p>
                    <p>Politica de privacidade</p>
                </div>
                <div class="info-footer">
                    <p> &copy; 2023 Page<span>Marketing</span>, Inc.</p>
                    <p class="credits">Created for Developer Michele Jasmim </p>
                </div>
                <div class="footer-logo">
                    <h4>Page<span>Marketing</span></h4>
                </div>
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
    border-top: .1rem solid #7a7a7a;
}

.container-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.terms-politic-footer p,
.info-footer .credits {
    font-size: .798rem;
}

.info-footer .credits {
    cursor: pointer;
}

.info-footer {
    text-align: center;
}

.info-footer span,
.footer-logo span {
    color: #AF9B51;
}

.footer-logo {
    text-align: right;
}</style>