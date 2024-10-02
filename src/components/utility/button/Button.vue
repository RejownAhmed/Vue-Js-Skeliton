<template>
  <button
    type="button"
    class="btn"
    :class="buttonClasses"
    :disabled="props.disabled || props.loading"
    v-bind="$attrs"
    v-wave="props.ripple && !disabled"
  >
    <template v-if="loading">
      <PreLoader :size="props.size" strict color="white" class="mr-2" />
    </template>
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

import PreLoader from "@/components/utility/preloader";

const props = defineProps({
  color: {
    type: String,
    default: "primary",
    validator: (value) =>
      [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "dark",
        "submit",
        "transparent",
      ].includes(value),
  },
  gradient: Boolean,
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  ripple: Boolean,
  icon: Boolean,
  square: Boolean,
  flat: Boolean,
  active: Boolean,
  block: Boolean,
  outlined: Boolean,
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: [String, Boolean],
    default: false,
    validator: (v) => {
      return v === true || v === false || ["md", "lg", "xl", "2xl", "3xl", "full"].includes(v);
    },
  },
  hoverElevate: {
    type: Boolean,
    default: true,
  },
  loading: Boolean,
});

// Computed
const disabled = computed(() => {
  return props.disabled || props.loading;
});
const buttonClasses = computed(() => {
  const classes = [
    props.outlined ? `btn-outline-${props.color}` : `btn-${props.color}`,
    {
      disabled: props.disabled || props.loading,
      active: props.active,
      "btn-icon": props.icon,
      "rounded-default": !props.square && !props.rounded,
      "rounded-full": typeof props.rounded === "boolean" && props.rounded,
      "btn-flat": props.flat,
      "btn-gradient": props.gradient,
      "btn-no-elevation": props.hoverElevate === false,
    },
    // 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'
    props.rounded ? `rounded-${props.rounded}` : "",
    `btn-${props.size}`,
  ];

  return classes;
});

const themeColor = computed(() => `var(--color-${props.color})`);
</script>
<style lang="scss">
$colors: "primary", "secondary", "success", "danger", "warning", "dark";

.btn {
  --color: v-bind(themeColor);
  @apply relative select-none overflow-hidden inline-flex gap-1 items-center justify-center leading-normal z-[1] text-sm font-medium h-min;

  &:not(.btn-flat) {
    @apply ease-in duration-200;
    &:not(.btn-no-elevation) {
      &:is(.active),
      &:hover {
        -webkit-transform: translateY(-3px);
        -moz-transform: translateY(-3px);
        -o-transform: translateY(-3px);
        transform: translateY(-3px);
      }
    }
  }

  &:not(.btn-icon) {
    &.btn-sm {
      @apply text-[0.8rem] py-[8px] px-[12px] font-medium;
    }

    &.btn-md {
      @apply text-sm py-[9px] px-[15px];
    }

    &.btn-lg {
      @apply py-[8px] px-[16px] text-base;
    }
  }

  &.btn-icon {
    &.btn-sm {
      @apply p-[6px];
    }

    &.btn-md {
      @apply p-[8px];
    }

    &.btn-lg {
      @apply p-[10px];
    }
  }

  @each $color in $colors {
    &.btn-#{$color} {
      @apply bg-#{$color};

      &:not(.btn-flat) {
        @apply text-white;
        &:not(.btn-no-elevation) {
          @apply hover:shadow-#{$color};
        }
        &:is(.active) {
          @apply shadow-#{$color};
        }
      }

      &:is(.btn-flat) {
        @apply bg-opacity-10 text-#{$color};
      }
    }
  }

  &.btn-transparent {
    @apply bg-transparent text-dark;
  }

  &.btn-gradient {
    &::before {
      content: "";
      position: absolute;
      background: linear-gradient(30deg, rgb(var(--color) / 0) 33%, rgb(var(--color) / 1));
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      pointer-events: none;
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
      z-index: -1;
      -webkit-filter: hue-rotate(-40deg);
      filter: hue-rotate(-40deg);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    &.btn-primary,
    // &.btn-success,
    &.btn-secondary {
      &::before {
        -webkit-filter: hue-rotate(40deg);
        filter: hue-rotate(40deg);
      }
    }
  }

  @each $color in $colors {
    &.btn-outline-#{$color} {
      @apply border border-#{$color} text-#{$color};
    }
  }
  &.disabled {
    &:is(.active),
    &:hover {
      -webkit-transform: none !important;
      -moz-transform: none !important;
      -o-transform: none !important;
      transform: none !important;
      box-shadow: none !important;
    }
    &::after {
      content: "";
      @apply absolute inset-0 bg-white opacity-30;
    }
  }
}
</style>
