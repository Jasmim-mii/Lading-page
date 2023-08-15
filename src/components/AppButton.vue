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
};
</script>

<style scoped>
.btn {
  padding: 0.89rem 3rem;
  text-align: center;
  border: none;
  font-size: 0.75rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #eee;
  background: #af9b51;
  transition: 0.2s linear;
  cursor: pointer;
}
.btn:hover {
  color: #eee;
  background: #917c33;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }

  .btn {
    padding: 0.89rem 1.2rem;
    text-align: center;
    border: none;
    font-size: 0.65rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #eee;
    background: #af9b51;
    transition: 0.2s linear;
    cursor: pointer;
  }
}
</style>
