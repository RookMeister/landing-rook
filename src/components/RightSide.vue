<script setup lang="ts">
import { ref } from 'vue'
import { rightSide } from '../info';

const { about } = rightSide;
const hash = document.location.hash.split('#')
const activeBlock = ref<string | 'resume' | 'project'>(hash[1] || 'resume');
</script>

<template>
  <div class="space-y-5 lg:col-span-2">
    <div class="p-7 pb-0 block-section">
      <h2 class="block-title">{{ about.titleBlock }}</h2>
      <p class="text-gray-600 mb-5">{{ about.bio }}</p>
      <div class="flex flex-col space-y-4">
        <a :href="`mailto:${about.mail}`" class="mail-link social-link-hover">
          <i class="bx bx-at text-xl"></i>
          <span>{{ about.mail }}</span>
        </a>
        <ul class="flex space-x-5">
          <li v-for="social in about.socials" :key="social.service">
            <a target="blank" :href="social.link" class="social-link-hover"><i class="bx text-2xl" :class="`bxl-${social.service}`" /></a>
          </li>
        </ul>
      </div>
      <div class="border-t border-gray-200 my-5"></div>
      <ul class="flex space-x-8 font-medium print:hidden">
        <li v-for="block in about.blocks" :key="block.slug">
          <a
            :href="`#${block.slug}`"
            @click="activeBlock = block.slug"
            :class="`menu-link${(activeBlock === block.slug) ? '-active': ''}`"
            class="menu-link-hover cursor-pointer"
          >{{ block.title }}</a>
        </li>
      </ul>
    </div>

    <div v-for="block in about.blocks" :key="block.slug">
      <div v-for="item in about[block.slug]" :class="{'hidden': item.is !== activeBlock}" :key="item.titleBlock" class="p-7 block-section print:block">
        <h2 class="block-title">{{ item.titleBlock }}</h2>
        <div class="mb-5 item-section" v-for="(block, i) in item.blocks" :key="block.title">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-cover print:hidden" :style="`background-image: url('${block.logoUrl}');`" />
          <div class="w-full space-y-5">
            <div class="item-header items-end">
              <div class="space-y-1.5">
                <div class="font-medium">{{ block.title }}</div>
                <div class="flex space-x-5">
                  <div class="item-header-info">
                    <svg v-if="item.slug === 'expirience'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                    <svg v-if="item.slug === 'education'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                      </path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                      </path>
                    </svg>
                    <svg v-if="item.slug === 'project'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                    </svg>
                    <span>{{ block.nameSubject }}</span>
                  </div>
                  <div class="item-header-info">
                    <svg v-if="item.slug === 'project'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{{ block.location }}</span>
                  </div>
                </div>
              </div>
              <div v-if="block.period" class="space-y-2 sm:text-right">
                <div v-if="block.timeJob" class="job-item-badge print:hidden">{{ block.timeJob }}</div>
                <div class="item-header-info">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                    </path>
                  </svg>
                  <span>{{ block.period }}</span>
                </div>
              </div>
            </div>
            <div v-if="block.descriptions" class="text-gray-600 space-y-2">
              <div v-for="description in block.descriptions" :key="description.text">
                <h3 v-if="description.title " class="font-medium">{{ description.title }}</h3>
                <div v-html="description.text" />
              </div>
            </div>
            <a v-if="block.link"
              target="blank" :href="block.link"
              class="inline-flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                </path>
              </svg>
              <span>{{ block.link }}</span>
            </a>
            <div v-if="i !== item.blocks.length - 1" class="border-b border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <a href="/personal_cv/single-article.html" class="article-title-hover block">
      <article class="article-section">
        <div class="space-y-3 mb-5 p-7 pb-0">
          <h2 class="text-lg font-semibold">Qui quasi aut iure provident occaecati dignissimos et illo.</h2>

          <p class="text-gray-600">Numquam cumque ut excepturi. Nihil ea officiis. Voluptate cum velit quibusdam sed
            ducimus qui. Quis ut non hic facilis eum ut voluptatibus eveniet. Repellat accusantium non maxime sequi
            dignissimos magnam et quos. Consequatur vel numquam.</p>

          <p><time datetime="2021-05-09 19:00" class="text-sm text-gray-400">May 09, 2021</time></p>
        </div>

        <div class="article-img">
          <img
            src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            alt="">
        </div>
      </article>
    </a> -->

  </div>
</template>

<style>
.item-section > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

@media (min-width: 640px) {
  .item-section > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .item-section {
    display: flex;
    align-items: flex-start;
  }
}

.item-header-info > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.375rem * var(--tw-space-x-reverse));
  margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));
}

.item-header-info {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
}

.item-header > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

@media (min-width: 640px) {
  .item-header > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .item-header {
    display: flex;
    justify-content: space-between;
  }
}

/* About Me Block */

.mail-link > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.mail-link {
  display: flex;
  align-items: center;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(139, 92, 246, var(--tw-text-opacity));
}

.social-link-hover:hover {
  --tw-text-opacity: 1;
  color: rgba(124, 58, 237, var(--tw-text-opacity));
}

.social-link-hover {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
}

.menu-link {
  border-color: transparent;
  border-bottom-width: 2px;
  display: inline-flex;
  padding-bottom: 1.25rem;
}

.menu-link-active {
  --tw-border-opacity: 1;
  border-color: rgba(139, 92, 246, var(--tw-border-opacity));
  border-bottom-width: 2px;
  display: inline-flex;
  padding-bottom: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(139, 92, 246, var(--tw-text-opacity));
}

.menu-link-hover:hover {
  --tw-border-opacity: 1;
  border-color: rgba(124, 58, 237, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(124, 58, 237, var(--tw-text-opacity));
}

.menu-link-hover {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
}

.job-item-badge {
  --tw-bg-opacity: 1;
  background-color: rgba(237, 233, 254, var(--tw-bg-opacity));
  border-radius: 0.5rem;
  display: inline-flex;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  --tw-text-opacity: 1;
  color: rgba(139, 92, 246, var(--tw-text-opacity));
  text-transform: capitalize;
}

.article-section {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  cursor: pointer;
  overflow: hidden;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.article-section:hover {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.article-section {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
}

.article-img {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  max-height: 20rem;
  overflow: hidden;
  width: 100%;
}

.single-article-section {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  overflow: hidden;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.single-article-img {
  max-height: 20rem;
  overflow: hidden;
  width: 100%;
}
</style>