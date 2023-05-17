<template>
  <main class="grid min-h-screen grid-cols-2">
    <div
      class="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden"
    >
      <div
        class="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-4xl"
      />
      <div class="absolute bottom-0 right-0 top-0 w-2 bg-stripes border-white/10 border-r" />
      <a
        href=""
        class="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
      >
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <UserIcon class="h-5 w-5 text-gray-500" />
        </div>

        <p class="max-w-[140px] text-sm leading-snug">
          <span class="underline">Create your account</span> and save your
          memoirs
        </p>
      </a>
      <div class="space-y-5">
        <img
          src="@/assets/nlw-spacetime-logo.svg"
          alt="NLW Spacetime"
        >

        <div class="max-w-[420px] space-y-1">
          <h1 class="text-5xl font-bold leading-tight text-gray-50">
            Your time capsule
          </h1>
          <p class="text-lg leading-relaxed">
            Collect remarkable moments of your journey and share (if want) with the world!
          </p>
        </div>

        <a
          class="inline-block rounded-full bg-purple-600 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          href=""
        >
          REGISTER MEMORY
        </a>
      </div>

      <div class="text-sm leading-relaxed text-gray-200">
        Create with 💚 in NLW by
        <a
          target="_blank"
          rel="noreferrer"
          class="underline hover:text-gray-100"
          href="https://github.com/LuisSempre"
        >
          Luis Lucas
        </a>
      </div>
    </div>
    <div class="flex flex-col p-16">
      <div class="flex flex-1 items-center justify-center">
        <p class="w-[360px] text-center leading-relaxed">
          Not registry memory, &nbsp;<a
            href=""
            class="underline hover:text-gray-50"
          >let`s go</a>!
        </p>
      </div>
    </div>
  </main>
</template>
<script setup>
	import { UserIcon } from '@heroicons/vue/solid'
</script>
