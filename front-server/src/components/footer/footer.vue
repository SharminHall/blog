<template>
<transition name="fade">
    <footer class="ink-free" v-show="$store.getters.isHome">
        While There is a Life, There is Hope.
    </footer>
</transition>
</template>

<script>
export default {
    name: 'm-footer',
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
footer {
    width: 100%;
    height: 2.75rem;
    text-align: center;
}
</style>
