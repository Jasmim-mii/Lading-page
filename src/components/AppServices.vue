<template>
    <section id="services">
        <div class="container">
        <div class="info-service">
            <h2 class="info-title">Nosso serviços</h2>
            <p class="info-subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fugit odio.</p>
        </div>
        <div class="services">
            <div class="card-service" v-for="services in service" :key="services.id">
                <div class="nht"></div>
                <div class="circle"><font-awesome-icon class='icon' :icon="services.icon" /></div>

                <div class="content-services">
                    <h4>{{ services.title }}</h4>
                    <p v-for="(i, index) in services.text" :key="index">{{ i }}</p>
                </div>
            </div>

        </div>
    </div>
    </section>
</template>

<script>

export default {
   
    data() {
        return {
            service: [
                {
                    "id": 1,
                    "title": "delectus aut autem",
                    "text": {
                        '1': "Lorem ipsum  sit amet ",
                        '2': "Lorem ipsum dolor  amet2 ",
                        "3": "Lorem ipsum  sit amet3 ",
                        "4": "Lorem  dolor sit amet4 "
                    },
                    "icon": "credit-card"

                },
                {
                    "id": 2,
                    "title": "quis ut nam ",
                    "text": {
                        '1': "Lorem  dolor sit amet ",
                        '2': "Lorem ipsum  sit amet2 ",
                        "3": "Lorem ipsum dolor  amet3 ",
                        "4": "Lorem ipsum  sit amet4 "
                    },
                    "icon": 'square-check'
                },
                {
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "text": {
                        '1': "Lorem ipsum  sit amet ",
                        '2': "Lorem ipsum dolor  amet2 ",
                        "3": "Lorem  dolor sit amet3 ",
                        "4": "Lorem ipsum dolor sit amet4 "
                    },
                    "icon": "tv",
                },
                {
                    "id": 4,
                    "title": "et porro tempora",
                    "text": {
                        '1': "Lorem ipsum dolor sit amet ",
                        '2': "Lorem ipsum  amet2 ",
                        "3": "Lorem ipsum dolor  amet3 ",
                        "4": "Lorem  dolor sit amet4 "
                    },
                    "icon": "headset",
                },
            ]
        }

    }

}
</script>

<style scoped>
.services {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 1rem;
}

.card-service {
    padding: 1.5rem;
    border-radius: .2rem;
    display: table;
    text-align: center;
    transition: .4s ease-in-out;

}
.card-service:hover {
    background: #1a1a1ab2;
}

.info-service {
    text-align: center;
    padding-bottom: 3.5rem;
}

.info-service .info-title {
    font-size: 1.65rem;
}

.circle {
    margin: 0 auto;
    border-radius: 50%;
    text-align: center;
    width: 4em;
    height: 4em;
    border: .2rem solid #af9b5181
}
.icon {
    padding: 1rem 0;
    font-size: 1.5rem;
    transition: .4s ease-in-out;
}
.content-services {
    padding-top: .9rem;
}
.content-services h4 {
    padding-bottom: .3rem;
    font-size: .789rem;
}
.card-service:hover .icon {
    color: #af9b5181;
}

</style>