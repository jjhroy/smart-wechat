<template>
  <div class="flex flex-row flex-grow">
    <div>
      <div class="mb-3 font-semibold">好友列表</div>
      <div
        v-for="(item, index) in friendList"
        class="flex items-center justify-center bg-[#fff] h-[100px] px-3 rounded-lg"
        :key="index">
        <img
          class="w-[80px] h-[80px] flex-shrink-0 mr-4 rounded-lg"
          :src="item.avatar" />
        <span class="text-lg font-semibold">
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const friendList = ref([
    {
      name: 'roy',
      avatar: 'https://img.linkstarted.top/public/b_337756ab5df8e50d9dc33cdd2e6a7333.jpg',
    },
  ]);
  const { data } = await useFetch('http://127.0.0.1:8899/api/list');
  console.log('data', data.value);
</script>

<style></style>
