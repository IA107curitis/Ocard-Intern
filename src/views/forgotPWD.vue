<template>
  <div @click="goBack" class="mt-[45px] ml-5"><IconBack></IconBack></div>
  <div
    class="text-[28px]/[30.8px] text-[#1D1E20] text-center font-Inter font-semibold tracking-tight mt-[15px]"
  >
    Forgot Password
  </div>
  <div class="mt-[68px] mb-[80px] flex justify-center">
    <IconCloudLock></IconCloudLock>
  </div>

  <div class="flex justify-center">
    <form class="w-[335px]">
      <label for="Email" class="relative">
        <p class="text-[13px]/[14.3px] text-[#8F959E]">Email Address</p>
        <input
          class="border-b border-solid w-[100%] py-2 text-[15px]/[16.5px] text-[#1D1E20] font-Inter font-medium mb-5 outline-0"
        />
      </label>
      <div
        class="absolute inset-x-0 bottom-0 max-w-[375px] mx-auto flex justify-center flex-wrap"
      >
        <div
          class="max-w-[263px] text-[13px]/[18.2px] text-[#8F959E] font-Inter font-normal text-center m-5"
        >
          Please write your email to receive a confirmation code to set a new
          password.
        </div>
        <button
          type="submit"
          class="bg-[#9775FA] w-full h-[75px] pt-[15px] px-[10px] pb-[10px] rounded-none"
        >
          <span
            class="h-full flex justify-center items-start text-[#FEFEFE] text-[17px]/[18.7px] font-Inter font-medium"
          >
            Confirm Mail
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import IconBack from "@/components/icons/IconBack.vue";
import IconCloudLock from "@/components/icons/IconCloudLock.vue";
</script>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped></style>
