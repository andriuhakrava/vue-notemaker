<template>
  <router-link tag="div" :to="`/note/${note.id}`" v-on:click="showNote">
    <div class="note">
      <div class="note-title">{{ note.name }}</div>
      <div class="note-content">{{ note.content }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['note'],
  methods: {
    showNote() {
      console.log(this.props.note.id);
      console.log(this.$router.params);
    },
  },
};
</script>

<style>
.note {
  display: inline-block;
  max-width: 350px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border: 2px solid #ddd;
  border-radius: 14px;
  cursor: pointer;
}
</style>
