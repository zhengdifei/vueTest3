<template>
    <main class="content">
        <slot>{{msg}}</slot>
    </main>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello content'
            }
        }
    }
</script>
