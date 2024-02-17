<template>
    <div 
        class="
            relative
            flex 
            flex-col 
            justify-center 
            items-center 
            bg-[#F5F8FF] 
            rounded-[14px] 
            py-[12px] 
            px-[24px] 
            w-[90px]
            h-[90px]
            shadow-md 
            cursor-pointer 
            hover:w-[95px] 
            hover:h-[95px]
        "
        @click="handleClick"
    >
        <input v-if="title == 'อัปโหลด'" type="file" class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" @change="handleUpload" multiple/>
        <div v-html="icon"></div>
        <p class="text-[12px] text-[#1C1C1C]">{{ title }}</p>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:'title',
            },
            icon:String,
            onClick: Function,
            onUpload:Function
        },
        methods: {
            handleClick() {
                if (typeof this.onClick === 'function') {
                    this.onClick(); // Execute the provided function
                }
            },
            handleUpload(event){
                if (typeof this.onUpload === 'function' && this.title == 'อัปโหลด') {
                    this.onUpload(event); // Execute the provided function
                }
            }
        }
    }
</script>