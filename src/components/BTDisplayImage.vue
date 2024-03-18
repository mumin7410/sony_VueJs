<template>
    <div class="container">
        <!-- <p v-if="dataArray.length <= 0" class="self-center">เลือกรูปภาพจากไฟล์  หรือลากวางที่นี่</p> -->
        <div v-for="(image, index) in dataArray" :key="index" class="image-container">
            <div class="delete-icon" @click="onDelete(index)">
                <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="Delete icon" height="30"
                    width="30" />
            </div>
            <img :src="image.url" alt="Uploaded Image" class="uploaded-image">
        </div>
    </div>
</template>
-
<script>
export default {
    props: {
        dataArray: {
            type: Array,
            required: true
        },
    },
    methods: {
        onDelete(index) {
            this.dataArray.splice(index, 1);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid;
    border-radius: 14px;
    height: 100%;
    padding: 15px;
    overflow-y: auto;
}

.image-container {
    position: relative;
    margin-right: 15px;
    /* Adds horizontal spacing */
    margin-bottom: 15px;
    /* Adds vertical spacing */
}

.image-container:hover .delete-icon {
    display: block;
    /* Show the delete icon on hover */
}

.delete-icon {
    width: 30px;
    height: 30px;
    background-color: red;
    position: absolute;
    right: 1px;
    top: 1px;
    /* Adjust as necessary */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    display: none;
    /* Ensure it's above other elements */
}

.uploaded-image {
    width: 104px;
    /* Adjusted to your original size */
    height: 104px;
    /* Adjusted to your original size */
    border-radius: 10px;
}</style>