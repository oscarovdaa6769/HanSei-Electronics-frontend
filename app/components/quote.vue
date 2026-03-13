<script setup lang="ts">
const props = defineProps ({
    graph: String
})
</script>

<template>
    <div class="p-3 bg-light rounded-lg">
        <p class=""><Icon name="bxs:quote-alt-left" size="15" class="mr-1"/> {{ graph }}</p>
    </div>
</template>