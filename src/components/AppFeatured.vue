<template>
    <section id="featured">
        <div class="container">
            <div class="featured">
                <app-card-slot v-for="obj in featured" :key="obj.id">
                    <font-awesome-icon class='icon' :icon="obj.icon" />
                    <div class="content">
                        <h4>{{ obj.title }}</h4>
                        <p>{{ obj.text }}</p>
                    </div>
                </app-card-slot>
            </div>
        </div>
    </section>
</template>

<script>
import AppCardSlot from './AppCardSlot.vue'
export default {
    name: "AppFeatured",
    components: {
        AppCardSlot,
    },

    data() {
        return {
            featured: [
                {
                    "id": 1,
                    "title": "delectus aut autem",
                    "text": "Lorem ipsum dolor sit amet consectetur",
                    "icon": "credit-card"

                },
                {
                    "id": 2,
                    "title": "quis ut nam ",
                    "text": "Lorem ipsum dolor sit amet consectetur",
                    "icon": 'square-check'
                },
                {
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "text": "Lorem ipsum dolor sit amet consectetur",
                    "icon": "tv",
                },
                {
                    "id": 4,
                    "title": "et porro tempora",
                    "text": "Lorem ipsum dolor sit amet consectetur",
                    "icon": "headset",
                },
            ]
        }

    }
}
</script>

<style scoped>
section{
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
    font-size: .7rem;
    text-transform: uppercase;
}

.content p {
    padding-top: .2rem;
    color: #BEBEBE;
    font-size: .75rem
}</style>