<template>
  <div class="Unsplash">
    <SearchForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SearchForm from "../components/SearchForm.vue";

@Options({
  components: {
    SearchForm
  }
})
export default class Unsplash extends Vue {}
</script>
