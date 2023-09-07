<template>
  <view v-if="dot" :class="bem.b()">
    <view :style="dotComputed" />
    <slot> </slot>
  </view>
  <slot v-else></slot>
</template>
<script setup lang="ts">
import { CSSProperties, computed, useSlots } from "vue";
import { createNamespace } from "../../lib/utils/create";
import { badgeProps } from "./v-badge";
const bem = createNamespace("badge");

const slots = useSlots() as any;

// props
const props = defineProps(badgeProps);

// computed
// 是否有slot
const isHasSlot = computed(() => {
  if (!slots.default) return false;
  const slot = slots.default && slots.default() && slots.default()[0];

  if (slot.children && typeof slot.children !== "string") {
    return true;
  } else {
    return false;
  }
});

const dotComputed = computed<CSSProperties>(() => {
  const size =
    typeof props.size === "number" ? props.size + props.unit : props.size;

  return {
    position: "absolute",
    top: 0,
    right: 0,
    width: size,
    height: size,
    borderRadius: "50%",
    background: props.background,
    boxShadow: "0 0 0 2rpx #ffffff",
  } as CSSProperties;
});

console.log("[插槽]", isHasSlot.value);
</script>

<style scoped></style>
