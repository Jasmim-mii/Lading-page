<template>
    <button class="btn">{{ btnTitle }}</button>
</template>

<script>
export default {
    props: {
        btnTitle: {
            type: String,
        },
    },

}
</script>

<style>
.btn{
    padding: .89rem 3rem;
    text-align: center;
    border: none;
    font-size: .75rem;
    margin-top:1rem;
    border-radius: .5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #eee;
    background: #AF9B51;
    transition: .2s linear;
    cursor: pointer;
}
.btn:hover{
    color: #eee;
    background: #917c33;
}
</style>