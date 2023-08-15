<template>
  <section class="container" id="featured">
    <div class="featured">
      <app-card-slot v-for="obj in featured" :key="obj.id">
        <font-awesome-icon class="icon" :icon="obj.icon" />
        <div class="content">
          <h4>{{ obj.title }}</h4>
          <p>{{ obj.text }}</p>
        </div>
      </app-card-slot>
    </div>
  </section>
</template>

<script>
import AppCardSlot from "./AppCardSlot.vue";
export default {
  name: "AppFeatured",
  components: {
    AppCardSlot,
  },

  data() {
    return {
      featured: [
        {
          id: 1,
          title: "delectus aut autem",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "credit-card",
        },
        {
          id: 2,
          title: "quis ut nam ",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "square-check",
        },
        {
          id: 3,
          title: "fugiat veniam minus",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "tv",
        },
        {
          id: 4,
          title: "et porro tempora",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "headset",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  background: #000000;
  position: relative;
  z-index: 2;
}

.featured {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  /* gap: 1rem */
}

.card {
  /* background: #494949; */
  background: none;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: start;
  align-content: start;
  gap: 1rem;
}

.icon {
  color: #af9b5181;
  font-size: 1.5rem;
}

.content h4 {
  font-size: 0.78rem;
  text-transform: uppercase;
}

.content p {
  padding-top: 0.2rem;
  color: #bebebe;
  font-size: 0.75rem;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }
  .featured {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card {
    /* background: #494949; */
    background: none;
    padding: 2rem 1rem;
    display: block;
    text-align: center;
  }
  .icon {
    padding-bottom: 1rem;
    text-align: center;
  }
}
</style>
