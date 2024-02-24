<script>
import BTTabbar from "../components/BTTabbar.vue";
import BTTransactionCard from "../components/BTTransactionCard.vue";
import BTMenuIcon from "../components/BTMenuIcon.vue";
import BTDisplayImage from "../components/BTDisplayImage.vue";
import BTButton from "../components/BTButton.vue";
import BTDisplayCam from "../components/BTDisplayCam.vue";
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';
import axios from 'axios';
export default {
  components: {
    BTTabbar,
    BTTransactionCard,
    BTMenuIcon,
    BTDisplayImage,
    BTButton,
    Dropdown,
    BTDisplayCam
  },
  data() {

    const selectedCity = ref();
    const cities = ref([
        { EmpName: 'Sittisak', EmpId: '2620169' },
        { EmpName: 'Naphat', EmpId: '0000001' },
        { EmpName: 'Piyungkul', EmpId: '0000002' },
        { EmpName: 'Meen', EmpId: '0000003' },
    ]);
    const opC = false;

    return {
        disabled: true,
        

      data: [],
      uploadedImages: [],
      Webcam: `
        <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3334 7.29166C28.1659 7.29166 32.0834 11.2092 32.0834 16.0417C32.0834 20.8741 28.1659 24.7917 23.3334 24.7917H11.6667C6.83426 24.7917 2.91675 20.8741 2.91675 16.0417C2.91675 11.2092 6.83426 7.29166 11.6667 7.29166H23.3334ZM23.3334 10.2083H11.6667C8.44509 10.2083 5.83341 12.82 5.83341 16.0417C5.83341 19.1657 8.2892 21.7161 11.3756 21.8679L11.6667 21.875H23.3334C26.5551 21.875 29.1667 19.2633 29.1667 16.0417C29.1667 12.9176 26.711 10.3672 23.6246 10.2155L23.3334 10.2083ZM17.5001 11.6667C19.9163 11.6667 21.8751 13.6254 21.8751 16.0417C21.8751 18.4579 19.9163 20.4167 17.5001 20.4167C15.0838 20.4167 13.1251 18.4579 13.1251 16.0417C13.1251 13.6254 15.0838 11.6667 17.5001 11.6667ZM17.5001 14.5833C16.6947 14.5833 16.0417 15.2362 16.0417 16.0417C16.0417 16.8471 16.6947 17.5 17.5001 17.5C18.3055 17.5 18.9584 16.8471 18.9584 16.0417C18.9584 15.2362 18.3055 14.5833 17.5001 14.5833ZM26.2501 26.25V29.1667H8.75008V26.25H26.2501Z" fill="#1C1C1C"/>
        </svg>
      `,
      Upload:`
        <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M4.375 21.875C4.375 25.9997 4.375 28.0621 5.65641 29.3436C6.93782 30.625 9.00021 30.625 13.125 30.625H21.875C25.9998 30.625 28.0621 30.625 29.3436 29.3436C30.625 28.0621 30.625 25.9997 30.625 21.875" stroke="#1C1C1C" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5001 23.3333V4.375M17.5001 4.375L23.3334 10.7552M17.5001 4.375L11.6667 10.7552" stroke="#1C1C1C" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      Date: new Date().toLocaleString().split(' ')[0],
      Time: new Date().toLocaleString().split(' ')[1],
      cities,
      selectedCity,
      opC
    };
  },
  created() {
    // Update time every second
    setInterval(() => {
      this.Time = new Date().toLocaleString().split(' ')[1];
    }, 1000);
  },
  methods: {
    
    async clickadd() {
        try {
            const canvas = document.createElement('canvas');
            const video = this.$refs.video;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageUrl = canvas.toDataURL('image/jpeg');

            // Add the captured image to the uploadedImages array
            this.uploadedImages.push({ url: imageUrl });

            
        } catch (error) {
            console.error('Error capturing image:', error);
        }
    },
        AddImage(event) {
            if (event && event.target && event.target.files.length > 0) {
                const files = event.target.files;

                // Iterate through each selected file
                for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = () => {
                    const imageUrl = reader.result;

                    // Check if the image already exists in the array
                    const imageExists = this.uploadedImages.some(image => image.url === imageUrl);

                    // If the image doesn't exist, add it to the array
                    if (!imageExists) {
                    this.uploadedImages.push({ url: imageUrl });
                    }
                };

                if (file) {
                    reader.readAsDataURL(file);
                }
                }
            }
        },

        async startCamera() {
        try {
            this.opC = !this.opC; // Toggle opC value
            if (this.opC) {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (this.$refs.video && stream) {
                    this.$refs.video.srcObject = stream;
                } else {
                    console.error('Video element or stream is undefined');
                }
            } else {
                // Close the camera by stopping the stream
                const stream = this.$refs.video.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                this.$refs.video.srcObject = null;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    },
    async uploadImages() {
        try {
            for (let i = 0; i < this.uploadedImages.length; i++) {
                const formData = new FormData();

                // Convert Base64 data URL to Blob
                const base64Data = this.uploadedImages[i].url.split(',')[1];
                const blob = await fetch(this.uploadedImages[i].url).then(res => res.blob());

                // Create a file object from the Blob
                const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

                // Append the file to the FormData object
                formData.append('image', file);
                formData.append('EmpName', this.selectedCity.EmpName); // Append the name
                formData.append('EmpId', this.selectedCity.EmpId); // Append the name

                // Send the FormData object to the backend
                await axios.post('http://192.168.99.87:8000/upload_image/', formData);
            }
            console.log('All images uploaded successfully');
        } catch (error) {
            console.error('Error uploading images:', error);
        }
        
        
    },
    

    deleteall() {
    this.uploadedImages.forEach((img) => URL.revokeObjectURL(img.url));
    this.uploadedImages = [];
    },

    }
};
</script>

<template>
    <div class="flex h-screen bg-[#F5F8FF] font-Kanit">
      <div class="flex flex-[0.1] items-center content-center justify-center">
        <BTTabbar />
      </div>
      <!-- main container -->
      <div class="w-full bg-white rounded-[14px] mx-[20px] my-[40px] flex-[0.9] p-[30px] shadow-md overflow-y-scroll">
        <!-- section_1 -->
        <div class="flex flex-row justify-between items-center">
          <p class="text-[64px] font-Kanit text-[#1C1C1C]">AddEmp</p>
          <div class="flex flex-col items-center">
            <p class="text-[#788AA3] text-[16px]">{{ Date }}</p>
            <p class="text-[#1C1C1C] text-[48px]">{{ Time }}</p>
          </div>
        </div>
        <!-- upload_section -->
        <div class="flex h-[85%]">
            <!-- display -->
            <div class="flex flex-col w-[60%] ">
                <!-- display_box -->
                <div class="h-[80%] mb-[20px]">
                    <BTDisplayImage :dataArray="uploadedImages"/>
                </div>
                <!-- button_container -->
                <div class="h-[20%] flex items-center justify-center">
                    <div class="mr-[15px]">
                        <BTButton 
                            :icon="Webcam"
                            title = "เว็บแคม"
                            :onClick="startCamera"
                        />
                    </div>
                    <div class="mr-[15px]">
                        <BTButton 
                            :icon="Upload"
                            title = "อัปโหลด"
                            :onUpload="AddImage"
                        />
                    </div>
                    <div v-if="this.uploadedImages.length > 0" >
                        <BTButton 
                                title = "ลบทั้งหมด"
                                :onClick="deleteall"
                            />
                    </div>
                </div>
            </div>
            <!-- information -->
            <div class="w-[40%] justify-center items-center flex">
                <div class="flex flex-col">
                    <!-- กล้องจับภาพ -->
                    <div v-if="opC" class="relative w-[12rem] h-[12rem] rounded-[14px] border-[#000] border-[1px] mb-[50px]">
                        
                        <div @click="clickadd" class="flex items-center justify-center absolute w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] bg-[#F5F8FF] shadow-md cursor-pointer rounded-[5px] right-[-60px] top-1/2 transform -translate-y-1/2">
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6.65C1.26522 6.65 1.51957 6.54991 1.70711 6.37175C1.89464 6.19359 2 5.95196 2 5.7V2.85C2 2.59804 2.10536 2.35641 2.29289 2.17825C2.48043 2.00009 2.73478 1.9 3 1.9H6C6.26522 1.9 6.51957 1.79991 6.70711 1.62175C6.89464 1.44359 7 1.20196 7 0.95C7 0.698044 6.89464 0.456408 6.70711 0.278249C6.51957 0.100089 6.26522 0 6 0H3C2.20435 0 1.44129 0.300267 0.87868 0.834746C0.316071 1.36922 0 2.09413 0 2.85V5.7C0 5.95196 0.105357 6.19359 0.292893 6.37175C0.48043 6.54991 0.734784 6.65 1 6.65ZM6 17.1H3C2.73478 17.1 2.48043 16.9999 2.29289 16.8218C2.10536 16.6436 2 16.402 2 16.15V13.3C2 13.048 1.89464 12.8064 1.70711 12.6282C1.51957 12.4501 1.26522 12.35 1 12.35C0.734784 12.35 0.48043 12.4501 0.292893 12.6282C0.105357 12.8064 0 13.048 0 13.3V16.15C0 16.9059 0.316071 17.6308 0.87868 18.1653C1.44129 18.6997 2.20435 19 3 19H6C6.26522 19 6.51957 18.8999 6.70711 18.7218C6.89464 18.5436 7 18.302 7 18.05C7 17.798 6.89464 17.5564 6.70711 17.3782C6.51957 17.2001 6.26522 17.1 6 17.1ZM10 5.7C9.20887 5.7 8.43552 5.92287 7.77772 6.34042C7.11992 6.75797 6.60723 7.35144 6.30448 8.0458C6.00173 8.74016 5.92252 9.50422 6.07686 10.2413C6.2312 10.9785 6.61216 11.6556 7.17157 12.187C7.73098 12.7184 8.44371 13.0804 9.21964 13.227C9.99556 13.3736 10.7998 13.2984 11.5307 13.0107C12.2616 12.7231 12.8864 12.2361 13.3259 11.6112C13.7654 10.9863 14 10.2516 14 9.5C14 8.49218 13.5786 7.52563 12.8284 6.81299C12.0783 6.10036 11.0609 5.7 10 5.7ZM10 11.4C9.60444 11.4 9.21776 11.2886 8.88886 11.0798C8.55996 10.871 8.30362 10.5743 8.15224 10.2271C8.00087 9.87992 7.96126 9.49789 8.03843 9.12933C8.1156 8.76076 8.30608 8.42222 8.58579 8.1565C8.86549 7.89078 9.22186 7.70982 9.60982 7.63651C9.99778 7.5632 10.3999 7.60082 10.7654 7.74463C11.1308 7.88844 11.4432 8.13196 11.6629 8.44442C11.8827 8.75687 12 9.12422 12 9.5C12 10.0039 11.7893 10.4872 11.4142 10.8435C11.0391 11.1998 10.5304 11.4 10 11.4ZM17 0H14C13.7348 0 13.4804 0.100089 13.2929 0.278249C13.1054 0.456408 13 0.698044 13 0.95C13 1.20196 13.1054 1.44359 13.2929 1.62175C13.4804 1.79991 13.7348 1.9 14 1.9H17C17.2652 1.9 17.5196 2.00009 17.7071 2.17825C17.8946 2.35641 18 2.59804 18 2.85V5.7C18 5.95196 18.1054 6.19359 18.2929 6.37175C18.4804 6.54991 18.7348 6.65 19 6.65C19.2652 6.65 19.5196 6.54991 19.7071 6.37175C19.8946 6.19359 20 5.95196 20 5.7V2.85C20 2.09413 19.6839 1.36922 19.1213 0.834746C18.5587 0.300267 17.7956 0 17 0ZM19 12.35C18.7348 12.35 18.4804 12.4501 18.2929 12.6282C18.1054 12.8064 18 13.048 18 13.3V16.15C18 16.402 17.8946 16.6436 17.7071 16.8218C17.5196 16.9999 17.2652 17.1 17 17.1H14C13.7348 17.1 13.4804 17.2001 13.2929 17.3782C13.1054 17.5564 13 17.798 13 18.05C13 18.302 13.1054 18.5436 13.2929 18.7218C13.4804 18.8999 13.7348 19 14 19H17C17.7956 19 18.5587 18.6997 19.1213 18.1653C19.6839 17.6308 20 16.9059 20 16.15V13.3C20 13.048 19.8946 12.8064 19.7071 12.6282C19.5196 12.4501 19.2652 12.35 19 12.35Z" fill="#1C1C1C"/>
    </svg>
</div>

                        <video class="w-full h-full object-fill rounded-[14px]" ref="video" autoplay></video>
                    </div>
                    <div class="mb-[10px]">
                        <Dropdown 
                            v-model="selectedCity" 
                            editable 
                            :options="cities" 
                            optionLabel="EmpName" 
                            placeholder="ชื่อพนักงาน" 
                            class="w-full md:w-[15rem] text-[14px] font-light" 
                            :pt="{ 
                                root: '!bg-[#FFF]',
                                wrapper: '!bg-[#FFF] !text-[#000]',
                                filterInput: '!text-[#000]',
                                item:'!text-[#000]',
                                itemLabel:'!text-[#000]',
                                input:'!text-[#000]',
                            }"
                            :ptOptions="{ mergeProps: true }"  
                        />
                    </div>
                    <div>
                        <Dropdown 
                            v-model="selectedCity" 
                            editable 
                            :options="cities" 
                            optionLabel="EmpId" 
                            placeholder="รหัสพนักงาน" 
                            class="w-full md:w-[15rem] text-[14px] font-light" 
                            :pt="{ 
                                root: '!bg-[#FFF]',
                                wrapper: '!bg-[#FFF] !text-[#000]',
                                filterInput: '!text-[#000]',
                                item:'!text-[#000]',
                                itemLabel:'!text-[#000]',
                                input:'!text-[#000]',
                            }"
                            :ptOptions="{ mergeProps: true }"  
                        />
                    </div>
                    <!-- upload_button -->
                    <div class="flex items-center justify-center p-[10px] rounded-[14px] bg-[#1C1C1C] mt-[10px] hover:p-[12px] cursor-pointer" 
                        @click="!disabled && uploadImages()"
                        :class="{ 'cursor-not-allowed opacity-50': disabled }">
                        <p class="text-[14px] text-[#FFF]">Upload</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>

  