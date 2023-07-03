<template>
        <div class="card">        
            <slot></slot>
        </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default:'card',
        },
    },
}
</script>

<style scoped>
.card{
    background: #1a1a1ab2;
    padding: 1.5rem 1.5rem;
    gap: 1rem;
    border-radius: .2rem

}
</style>