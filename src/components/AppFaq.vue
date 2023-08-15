<template>
  <section id="faq">
    <div class="container">
      <div class="faq">
        <div class="content-faq">
          <h2 class="title">Faq</h2>
          <span>
            <h1></h1>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a quod animi
            quaerat .
          </p>
        </div>
        <div class="container-faq">
          <div class="card-faq" v-for="i in faq" :key="i.id">
            <div @click="i.isActive = !i.isActive">
              <app-card-slot class="app-slot-faq" @click="i.showCard = !i.showCard">
                <div :class="{ active: i.isActive }">
                  <p>{{ i.title }}</p>
                </div>
              </app-card-slot>
              <div class="card-slot-hide" v-show="i.showCard">
                <p>{{ i.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppCardSlot from "./AppCardSlot.vue";
export default {
  components: {
    AppCardSlot,
  },
  data() {
    return {
      faq: [
        {
          id: 1,
          showCard: false,
          isActive: false,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1",
          icon: "credit-card",
        },
        {
          id: 2,
          showCard: false,
          isActive: false,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa2",
          icon: "square-check",
        },
        {
          id: 3,
          showCard: false,
          isActive: false,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa3",
          icon: "tv",
        },
        {
          id: 4,
          showCard: false,
          isActive: false,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa4",
          icon: "headset",
        },
        {
          id: 5,
          showCard: false,
          isActive: false,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa4",
          icon: "headset",
        },
      ],
    };
  },
};
</script>

<style scoped>
.faq {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
}

.container-faq {
  width: 100;
  display: block;
}

.content-faq {
  position: relative;
  z-index: 9;
}

.content-faq .title {
  margin-bottom: 2rem;
}

.app-slot-faq {
  position: relative;
  margin-top: 1rem;
  box-shadow: 0rem 0rem 0.2rem #000000;
  z-index: 0;
  cursor: pointer;
}

.card-slot-hide {
  background: #1010106e;
  z-index: 99;
  padding: 1rem 2rem;
}

span h1::before {
  content: "Lorem ipsum";
  position: absolute;
  display: block;
  opacity: 5;
  top: -0.6rem;
  left: 2.5rem;
  font-size: 2.5rem;
  color: rgba(70, 70, 70, 0.384);
}

.active::before {
  position: absolute;
  content: "";
  width: 0.2rem;
  height: 100%;
  top: 0;
  left: 0;
  background: #af9b5181;
  border-radius: 0.1rem 0 0 0.1rem;
}

.active::before {
  position: absolute;
  content: "";
  width: 0.2rem;
  height: 100%;
  top: 0;
  left: 0;
  background: #af9b5181;
  border-radius: 0.1rem 0 0 0.1rem;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }
  .faq {
    display: grid;
    grid-template-columns: 1fr;
  }
  .app-slot-faq,
  .card-slot-hide {
    font-size: 0.85rem;
  }
  span h1::before {
    content: "Lorem ipsum";
    position: absolute;
    display: block;
    opacity: 5;
    top: -0.6rem;
    left: 2.5rem;
    font-size: 1.5rem;
    color: #af9b5181;
  }
}
</style>
