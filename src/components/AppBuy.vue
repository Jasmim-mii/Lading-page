<template>
  <section id="buy">
    <div class="container">
      <div class="container-card">
        <div class="cards-buy">
          <div class="cards-buy-after"></div>

          <div class="containerBuy">
            <div class="card-title">
              <h3>Page<span>Marketing</span></h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat nisl quis lectus
                faucibus.
              </p>
            </div>
            <div class="price">
              <p>de <span>600 R$</span> por</p>
              <h3><span class="price-span">R$</span> 289,90</h3>
            </div>
            <div class="description">
              <p>Parcele o valor em até 10x de R$ 28,50 sem juros.</p>
              <app-button btnTitle="Increva-se já" />
            </div>
          </div>
        </div>
        <div class="info-cards">
          <app-card-slot class="content-cards" v-for="buy in buys" :key="buy.id">
            <font-awesome-icon class="icon" :icon="buy.icon" />
            <div class="content">
              <h4>{{ buy.title }}</h4>
              <p>{{ buy.text }}</p>
            </div>
          </app-card-slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppCardSlot from "./AppCardSlot.vue";

export default {
  components: {
    AppCardSlot,
    AppButton,
  },
  data() {
    return {
      buys: [
        {
          id: 1,
          title: "delectus aut autem",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "video",
        },
        {
          id: 2,
          title: "quis ut nam ",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "thumbs-up",
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
          icon: "users",
        },
        {
          id: 5,
          title: "fugiat veniam minus",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "pen-to-square",
        },
        {
          id: 6,
          title: "et porro tempora",
          text: "Lorem ipsum dolor sit amet consectetur",
          icon: "trophy",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container .container-card .cards-buy {
  position: relative;
}

.container .container-card .cards-buy .containerBuy {
  position: relative;
  width: 17rem;
  height: 25rem;
  background: #1f1f1f;
  padding: 2rem 1.5rem;
  border-radius: 0.3rem;
  text-align: center;
  z-index: 999;
}

.container .container-card .cards-buy::after {
  content: "";
  position: absolute;
  border-radius: 0.3rem;
  background: #1f1f1f54;
  width: 17rem;
  height: 24rem;
  transform: rotate(15deg);
  opacity: 5;
  top: 0.5rem;
  left: 3.5rem;
  z-index: 0;
  transition: 0.2s;
}

.container .container-card .cards-buy::before {
  content: "";
  position: absolute;
  border-radius: 0.3rem;
  background: #1f1f1f1c;
  width: 17rem;
  height: 23rem;
  transform: rotate(35deg);
  opacity: 5;
  bottom: -0.5rem;
  left: 9rem;
  z-index: 0;
}

.cards-buy::after .containerBuy:hover {
  content: "";
  position: absolute;
  border-radius: 0.3rem;
  background: #1f1f1f1c;
  width: 17rem;
  height: 23rem;
  transform: rotate(0);
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1;
}

.card-title,
.price,
.description {
  padding-bottom: 2rem;
}

.card-title h3 {
  padding-bottom: 1rem;
}

.card-title span {
  color: #af9b51;
}

.card-title p,
.description p {
  font-size: 0.9rem;
}

.price h3 {
  font-size: 1.5rem;
}

.price span {
  color: #af9b51;
}

.price .price-span {
  color: #eee;
  font-size: 0.8rem;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 50%;
}

.content-cards {
  display: flex;
  background: none;
  justify-content: start;
  align-items: start;
  height: 6.5rem;
  gap: 1rem;
  transition: 0.4s ease-in-out;
}

.content-cards:hover {
  background: #1a1a1ab2;
}

.content h4 {
  font-size: 0.789rem;
}

.icon {
  font-size: 1.5rem;
  color: #af9b5181;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }
  .container-card {
    display: block;
  }
  .info-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 1.5rem;
    gap: 1rem;
    height: 50%;
  }
  .content-cards {
    display: table;
    background: none;
    justify-content: start;
    align-items: start;
    height: 8rem;
    gap: 1rem;
    transition: 0.4s ease-in-out;
  }
  .icon {
    padding-bottom: 1rem;
  }
  .card {
    padding: 1.2rem;
  }
  .content h4 {
    font-size: 0.75rem;
  }
  .content p {
    font-size: 0.8rem;
    padding-top: 0.5rem;
  }
}
</style>
