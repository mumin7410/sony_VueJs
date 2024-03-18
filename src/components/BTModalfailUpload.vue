<template>
    <dialog class="modal" :open="open">
      <div class="modal-box">
        <h3 class="font-bold text-lg">เกิดข้อผิดพลาด</h3>
        <p class="py-4">{{ message }}</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn" @click="closeModal">ปิด</button>
          </form>
        </div>
      </div>
    </dialog>
  </template>
  
  <script>
  export default {
    props: {
      open: {
        type: Boolean,
        default: true
      },
      message: {
        type: String,
        default: ""
      }
    },
    methods: {
      closeModal() {
        this.$emit("close");
      }
    }
  };
  </script>
  
  <style>
  /* Add any additional styling for the modal box */
  </style>
  