<template>
    <div class="w-[250px] h-[300px] rounded-[14px] border-[#000] border-[1px] absolute top-[100px]">
        <video :ref="ref" autoplay></video>
    </div>
</template>
<script>
    export default {
        props:{
            ref:String
        }
    }
</script>

