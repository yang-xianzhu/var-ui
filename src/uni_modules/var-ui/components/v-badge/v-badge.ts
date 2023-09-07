import { ExtractDefaultPropTypes, PropType } from "vue";

export const badgeProps = {
  value: {
    type: String as PropType<String | Number>,
    default: true,
  },
  // 是否开启小红点
  dot: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: "#FF4D4f",
  },
  size: {
    type: String as PropType<String | Number>,
    default: 12,
  },
  unit: {
    type: String,
    default: "rpx",
  },
} as const;

export type BadgeProps = ExtractDefaultPropTypes<typeof badgeProps>;
