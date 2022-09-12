
<script lang="ts" setup>
const props = defineProps<{ leftSide: any }>()
const { information, skills } = props.leftSide;
</script>

<template>
  <div class="space-y-5 print:hidden">
    <div class="block-section overflow-hidden">
      <div class="h-32 bg-auto bg-center" :style="`background-image: url('${information.bg}')`" />
      <div class="pt-14 p-7 relative">
        <span v-if="information.status" class="status-badge">{{ information.status }}</span>
        <img :src="information.avatar" alt="Avatar" class="user-photo">
        <div class="text-lg font-semibold mb-1.5">{{ information.name }}</div>
        <div class="text-sm text-gray-400 mb-7">{{ information.position }}</div>
        <!-- <div class="flex group print:hidden">
          <button class="download-btn">Скачать CV</button>
          <button class="download-btn-icon">
            <svg class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </button>
        </div> -->
      </div>
    </div>

    <div class="p-7 block-section">
      <h2>{{ information.titleBlock }}</h2>
      <div class="space-y-4">
        <div class="flex justify-between" v-for="{ title, text } in information.array" :key="title">
          <div class="text-gray-400">{{ title }}</div>
          <div class="font-medium text-right text-gray-600">{{ text }}</div>
        </div>
      </div>
    </div>

    <div class="p-7 block-section">
      <h2>{{ skills.titleBlock }}</h2>
      <div class="-m-2 flex flex-wrap">
        <span class="skill-tag" v-for="item in skills.array" :key="item">{{ item }}</span>
      </div>
    </div>

  </div>
</template>

<style>

.skill-tag {
  --tw-bg-opacity: 1;
  background-color: rgba(237, 233, 254, var(--tw-bg-opacity));
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  --tw-text-opacity: 1;
  color: rgba(139, 92, 246, var(--tw-text-opacity));
}

.user-photo {
  --tw-border-opacity: 1;
  border-color: rgba(255, 255, 255, var(--tw-border-opacity));
  border-radius: 0.75rem;
  border-width: 2px;
  height: 5rem;
  position: absolute;
  top: -2.5rem;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  width: 5rem;
}

.status-badge {
  border-radius: 9999px;
  font-weight: var(--tp-font-weight-semi-bold-text);
  font-size: var(--tp-font-size-caption-text);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  position: absolute;
  top: 1rem;
  right: 1.75rem;
  background-color: #ede9fe;
  color: #8b5cf6;
  text-transform: uppercase;
}

.download-btn {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  width: 100%;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
}

.download-btn-icon {
  --tw-bg-opacity: 1;
  background-color: rgba(124, 58, 237, var(--tw-bg-opacity));
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.download-btn {
  --tw-bg-opacity: 1;
  background-color: rgba(139, 92, 246, var(--tw-bg-opacity));
}

.group:hover .download-btn {
  --tw-bg-opacity: 1;
  background-color: rgba(124, 58, 237, var(--tw-bg-opacity));
}
</style>