export interface ISvg {
  name: string;
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
  clickIcon?: () => void | undefined;
}
