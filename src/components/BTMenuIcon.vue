<template>
  <router-link :to="link" :target="link === 'camera' ? '_blank' : ''">
    <div class="flex flex-col items-center cursor-pointer">
      <div :class="'rounded-[8px] bg-[' + BgColor + '] px-[10px] py-[12px] align-middle justify-center flex shadow-md hover:px-[12px] hover:py-[14px]'" v-html="icon"></div>
      <p class="mt-[4px] text-[10px] text-[#FFF]">{{ text }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    BgColor: {
      type: String,
      default: "#F5F8FF" // Set the default value
    },
    link: {
      type: String,
      default: "#"
    }
  },
  methods: {

  }
};
</script>
