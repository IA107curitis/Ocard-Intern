<template>
  <div class="mt-[45px] ml-5"><IconBack></IconBack></div>
  <div
    class="text-[28px]/[30.8px] text-[#1D1E20] text-center font-Inter font-semibold tracking-tight mt-[15px]"
  >
    Let’s Get Started
  </div>

  <div class="h-[65%] flex justify-center flex-wrap content-center m-auto">
    <button
      class="w-[335px] h-[50px] bg-[#4267B2] flex items-center justify-center m-1"
    >
      <IconFacebook></IconFacebook
      ><span class="text-white text-[17px]/[22px]">Facebook</span>
    </button>
    <button
      class="w-[335px] h-[50px] bg-[#1DA1F2] flex items-center justify-center m-1"
    >
      <IconTwitter></IconTwitter
      ><span class="text-white text-[17px]/[22px]">Twitter</span>
    </button>
    <button
      class="w-[335px] h-[50px] bg-[#EA4335] flex items-center justify-center m-1"
    >
      <IconGoogle></IconGoogle
      ><span class="text-white text-[17px]/[22px]">Google</span>
    </button>
  </div>
  <div class="absolute inset-x-0 bottom-0 max-w-[375px] mx-auto">
    <div
      class="text-center text-[15px]/[16.5px] text-[#1D1E20] text-opacity-50 font-Inter font-normal m-[25px]"
    >
      Already have an account?
      <RouterLink to="/login" class="text-[#1D1E20] font-medium"
        >Signin</RouterLink
      >
    </div>
    <RouterLink to="/signUp">
      <button
        class="bg-[#9775FA] w-full h-[75px] pt-[15px] px-[10px] pb-[10px] rounded-none"
      >
        <span
          class="h-full flex justify-center items-start text-[#FEFEFE] text-[17px]/[18.7px] font-Inter font-medium"
        >
          Create an Account
        </span>
      </button>
    </RouterLink>
  </div>
</template>

<script setup>
import IconBack from "@/components/icons/IconBack.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
</script>

<style lang="scss" scoped></style>
