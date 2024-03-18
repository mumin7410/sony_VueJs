<template>
  <!-- container -->
  <div class="bg-white border-[2px] border-[#F5F8FF] px-[16px] py-[12px] inline-block rounded-[12px] mb-[12px] w-[49%] shadow-md" style="box-shadow: 0px 0px 10px rgba(245, 248, 255, 1);">
    <div class="flex flex-row items-center">
      <div>
        <div class="w-[75px] h-[75px] rounded-[12px] bg-slate-700">
          <img :src="imageUrl" alt="Employee Image" />
        </div>
      </div>
      <div class="ml-[25px] items-center text-left">
        <p class="text-[13px] mb-[4px]">รหัสพนักงาน: {{ EmployeeID }}</p>
        <p class="text-[13px] mb-[4px]">ชื่อ: {{ Name }}</p>
        <p class="text-[13px] mb-[4px]">วันที่ เวลา: {{ parseDateTime(DateTime) }}</p>
        <p class="text-[13px]">กล้อง: {{ CameraNo }}</p>
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
      return `${process.env.VUE_APP_SERVER}/${this.Image}`;
    }
  },
  methods: {
    parseDateTime(dateTime) {
      return dateTime.split('T').join(' ');
    }
  }
}
</script>
