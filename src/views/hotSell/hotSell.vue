<script setup></script>
<template>
    <div class="main">
        <div class="container">
            <div class="content">
                <DetailItem v-for="item in 20" :key="item"></DetailItem>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss" >
.main {
    padding-top: 30px;
    background: rgba(37, 38, 44, 1);

    .container {
        .content {
            display: grid;
            gap:20px 30px ;
            grid-template-columns: (repeat(auto-fill, minmax(585px, 1fr)));


        }
    }

}
</style>
