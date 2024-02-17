<template>
    <div class="flex flex-col items-start ml-[20px]" @click="toggleDropdown">
      <!-- title -->
      <!-- <p class="text-[12px] text-[#1C1C1C]">camera</p> -->
      <!-- dropdown -->
      <div class="relative cursor-pointer">
        <div class="bg-[#1C1C1C] py-[8px] px-[10px] justify-between flex rounded-[10px] items-center">
          <!-- text -->
          <p class="text-[16px] text-[#FFF] mr-[50px]">{{ selectedOption || 'All' }}</p>
          <!-- icon -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4" style="fill: white">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
          </div>
        </div>
        <!-- Dropdown menu -->
        <ul v-if="isOpen" class="absolute top-full left-0 w-[100%] bg-white rounded-[10px] mt-1">
          <li @click="selectOption('All')" class="py-[5px] px-[10px] cursor-pointer hover:bg-gray-200">All</li>
          <li @click="selectOption('Camera 1')" class="py-[5px] px-[10px] cursor-pointer hover:bg-gray-200">Camera 1</li>
          <li @click="selectOption('Camera 2')" class="py-[5px] px-[10px] cursor-pointer hover:bg-gray-200">Camera 2</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        selectedOption: null
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  