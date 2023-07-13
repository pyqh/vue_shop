<template>
  <div class="background">
    <el-card class="card">
      <h3 class="title">Shop</h3>
      <slot></slot>
    </el-card>
  </div>
</template>

<style scoped>
.background {
  background: url('../assets/bg.jpg') center center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.card {
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
