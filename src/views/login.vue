<template>
  <div @click="goBack" class="mt-[45px] ml-5"><IconBack></IconBack></div>
  <div
    class="text-[28px]/[30.8px] text-[#1D1E20] text-center font-Inter font-semibold tracking-tight mt-[15px]"
  >
    Welcome
    <div
      class="text-[15px]/[16.5px] text-[#8F959E] font-Inter font-normal mt-1"
    >
      Please enter your data to continue
    </div>
  </div>

  <div class="h-[60%] flex items-center justify-center">
    <form class="w-[335px]">
      <label for="Username" class="relative">
        <p class="text-[13px]/[14.3px] text-[#8F959E]">Username</p>
        <input
          class="border-b border-solid w-[100%] py-2 text-[15px]/[16.5px] text-[#1D1E20] font-Inter font-medium mb-5"
        />
        <span class="absolute inset-y-0 right-0 flex items-end mr-1"
          ><IconCheck></IconCheck>
        </span>
      </label>
      <label for="Password" class="relative">
        <p class="text-[13px]/[14.3px] text-[#8F959E]">Password</p>
        <input
          class="border-b border-solid w-[100%] py-2 text-[15px]/[16.5px] text-[#1D1E20] font-Inter font-medium mb-5"
        />
        <span
          class="text-[11px]/[12.1px] text-[#34C559] font-Inter font-normal absolute inset-y-0 right-0 flex items-end justify-center mr-1 mb-1"
          >Strong</span
        >
      </label>
      <div class="w-[100%] flex justify-end text-[15px]/[16.5px] my-[10px]">
        <RouterLink to="/forgotPassword" class="text-[#EA4335]"
          >Forgot password?</RouterLink
        >
      </div>
      <label class="inline-flex items-center w-[100%] justify-between mt-5">
        <span
          class="text-[13px]/[14.3px] text-[#1D1E20] font-Manrope font-medium"
          >Remember me
        </span>
        <input type="checkbox" value="" class="sr-only peer" checked />
        <div
          class="relative w-9 h-5 bg-gray-200 peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#34C759]"
        ></div>
      </label>
      <div
        class="absolute inset-x-0 bottom-0 max-w-[375px] mx-auto flex justify-center flex-wrap"
      >
        <div
          class="max-w-[326px] text-[13px]/[18.2px] text-[#8F959E] font-Inter font-normal text-center m-5"
        >
          By connecting your account confirm that you agree with our
          <span class="text-black font-Inter font-medium"
            >Term and Condition</span
          >
        </div>
        <button
          type="submit"
          class="bg-[#9775FA] w-full h-[75px] pt-[15px] px-[10px] pb-[10px] rounded-none"
        >
          <span
            class="h-full flex justify-center items-start text-[#FEFEFE] text-[17px]/[18.7px] font-Inter font-medium"
          >
            Login
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import IconBack from "@/components/icons/IconBack.vue";
import IconCheck from "@/components/icons/IconCheck.vue";
</script>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
