<template>
  <div class="edit">
    <div class="container gradient-container rounded-container mt-5">
    <EditComponent />
    </div>
  </div>
</template>

<script>
import EditComponent from '@/components/edit.vue'

export default {
    name: "EditView",
    components: {
        EditComponent
    }
}
</script>

<style>

</style>