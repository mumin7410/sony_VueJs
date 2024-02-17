<template>
    <div class="flex flex-col w-[49.5%]">
        <p class="text-[20px] text-[#1C1C1C] text-start">{{title}}</p>
        <div class="w-[100%] h-[100%] bg-[#BABABA] rounded-[14px] justify-center items-center overflow-hidden shadow-md">
            <div class="w-full h-full">
                <img :src="video_feed" alt="Camera Stream" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</template>


  
<script>
  export default {
    props: {
      title:String,
      video_feed:String
    },
    methods: {
  
    }
  };
</script>
  