<template>
  <section id="courses">
    <div class="course-content">
      <div class="courses">
        <div class="card-primary">
          <h4>lorem</h4>
          <p>Lorem ipsum dolor sit amet</p>
          <app-button :btnTitle="title" />
        </div>
        <div class="cards" v-for="card in todo" :key="card.id">
          <p class="text-aula">{{ card.subtitle }}</p>
          <h4>{{ card.title }}</h4>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "./AppButton.vue";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      title: "inscreva-se",
      todo: [
        {
          id: 1,
          title: "delectus aut autem",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi porro officiis et.",
          subtitle: "Aula 1",
        },
        {
          id: 2,
          title: "quis ut nam ",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi porro officiis et.",
          subtitle: "Aula 2",
        },
        {
          id: 3,
          title: "fugiat veniam minus",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi porro officiis et.",
          subtitle: "Aula 3",
        },
        {
          id: 4,
          title: "et porro tempora",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi porro officiis et.",
          subtitle: "Aula 4",
        },
      ],
    };
  },
};
</script>

<style scoped="css">
.course-content {
  background-image: url("../assets/course.png");
  background-repeat: no-repeat;
  background-position-y: 5rem;
  margin: 0 auto;
}
.courses {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
}

.card-primary {
  text-align: center;
  margin: auto 0;
  background: rgba(44, 44, 44, 0.562);
  width: 14rem;
  padding: 4rem 1rem;
  border-radius: 0.2rem;
  backdrop-filter: blur(1rem);
}

.card-primary h4 {
  padding-bottom: 0.4rem;
}

.text-aula {
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #9c8534;
}

@keyframes cardAnime {
  0% {
    border: 0.1rem solid hsla(0, 0%, 56%, 0.616);
    background: #1a1a1ad2;
  }

  50% {
    border: 0.1rem solid hsla(54, 82%, 28%, 0.616);
    background: #1a1a1a77;
  }

  100% {
    border: 0.1rem solid hsla(0, 0%, 27%, 0.616);
    background: #1a1a1ab2;
  }
}

.cards {
  background: rgba(44, 44, 44, 0.562);
  padding: 1.5rem;
  width: 14rem;
  height: 14rem;
  border-radius: 0.2rem;
  backdrop-filter: blur(1rem);
  border: 0.1rem solid hsla(0, 0%, 56%, 0.616);
  transition: 0.5s ease-in-out;
}

.cards:hover {
  animation: cardAnime 1s;
  background: #1a1a1ab2;
  animation-delay: ease-in-out;
  border: 0.1rem solid hsla(0, 0%, 27%, 0.616);
}

.cards h4 {
  padding-bottom: 1rem;
  padding-top: 0.2rem;
  font-size: 0.789rem;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }

  .courses {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
  .cards,
  .card-primary {
    width: 9rem;
    height: 14rem;
    font-size: 0.85rem;
  }
}
</style>
