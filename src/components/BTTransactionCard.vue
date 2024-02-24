<template>
    <!-- container -->
    <div class="bg-white border-2 border-[#1C1C1C] px-[16px] py-[12px] inline-block rounded-[12px] m-[2px] w-[48%] shadow-md">
      <div class="flex flex-row items-center">
        <div>
          <div class="w-[75px] h-[75px] rounded-[12px] bg-slate-700">
            <img :src="'http://192.168.99.87:8000'+Image" alt="Description of the image" />
          </div>
        </div>
        <div class="ml-[8px] items-center text-left">
          <p class="text-[12px] mb-[4px]">รหัสพนักงาน: {{ EmployeeID }}</p>
          <p class="text-[12px] mb-[4px]">ชื่อ: {{ Name }}</p>
          <p class="text-[12px]">วันที่ เวลา: {{ parseDateTime(DateTime) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      EmployeeID: String,
      Name: String,
      DateTime: String,
      CameraNo: String,
      Image: String
    },
    computed: {
      imageUrl() {
        return `https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg`;
      }
    },
    methods: {
      parseDateTime(dateTime) {
        return dateTime.split('T').join(' ');
      }
    }
  }
  </script>
  