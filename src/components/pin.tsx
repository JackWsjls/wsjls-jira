import { Rate } from "antd";
import React from "react";

interface PinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

// export const Pin = (props: PinProps) => {
//   const {checked, onCheckedChange, ...resetProps} = props
// }
export const Pin = ({ checked, onCheckedChange, ...resetProps }: PinProps) => {
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckedChange?.(!!num)}
      {...resetProps}
    />
  );
};
