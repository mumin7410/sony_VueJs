<template>
    <div class="flex flex-row flex-wrap border-[1px] rounded-[14px] h-[100%] p-[15px] overflow-y-scroll">
        <!-- <p v-if="dataArray.length <= 0" class="self-center">เลือกรูปภาพจากไฟล์  หรือลากวางที่นี่</p> -->
        <div v-for="(image, index) in dataArray" :key="index" class="relative">
            <div class=" w-[30px] h-[30px] bg-red-400 absolute right-[4px] rounded-tr-[10px] rounded-bl-[10px] cursor-pointer" @click="onDelete(index)">

            </div>
            <img :src="image.url" alt="Uploaded Image" class="w-[150px] h-[150px] mr-[4px] rounded-[10px]">
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            dataArray: {
                type: Array,
                required: true
            },
        },
        methods:{
            onDelete(index){
                this.dataArray.splice(index, 1);
            }
        }
    }
</script>