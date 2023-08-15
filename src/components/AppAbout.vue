<template>
  <section id="about">
    <div class="container">
      <div class="about">
        <div class="description">
          <h3 class="title">Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati
            nihil rem iusto quae voluptatem deserunt qui optio voluptatum neque. Quasi
            assumenda eligendi aperiam tenetur provident dolorum, inventore voluptate in
            qui optio voluptatum neque. Quasi assumenda eligendi aperiam tenetur provident
            dolorum, inventore voluptate in.
          </p>
          <app-button :btnTitle="title" />
        </div>
        <div class="photo">
          <img src="../assets/about.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
  data() {
    return {
      title: "quero ser aluno",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
}

.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #eee;
  align-content: center;
  justify-content: center;
  width: 80%;
  padding: 2rem;
  position: relative;
}

.photo {
  z-index: 999;
}

.photo img {
  width: 18rem;
}

.about::after {
  content: "";
  position: absolute;
  display: block;
  background: #63541f;
  height: 28rem;
  width: 25rem;
  opacity: 5;
  top: -1.5rem;
  right: 0;
  font-size: 2.5rem;
  color: rgba(70, 70, 70, 0.384);
  z-index: 0;
}

.description {
  position: relative;
}

.title {
  position: relative;
  padding-bottom: 2rem;
  color: #1d1d1d;
}

.title::before {
  content: "Lorem ipsum";
  position: absolute;
  display: block;
  opacity: 5;
  top: -1rem;
  left: 3rem;
  font-size: 2.5rem;
  color: rgba(70, 70, 70, 0.384);
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }
  .about[data-v-3de8301c] {
    display: grid;
    grid-template-columns: none;
    background: #eee;
    align-content: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    position: relative;
  }
  .photo {
    display: none;
  }
  .about::after {
    content: "";
    position: absolute;
    display: none;
    background: #63541f;
    height: 28rem;
    width: 25rem;
    opacity: 5;
    top: -1.5rem;
    right: 0;
    font-size: 2.5rem;
    color: rgba(70, 70, 70, 0.384);
    z-index: 0;
  }
  .title::before {
    content: "Lorem ipsum";
    position: absolute;
    display: block;
    opacity: 5;
    top: -0.5rem;
    left: 2rem;
    font-size: 1.5rem;
    color: rgba(70, 70, 70, 0.384);
  }
}
</style>
