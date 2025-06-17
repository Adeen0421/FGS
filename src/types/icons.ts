import { DynamicIcon } from 'lucide-react/dynamic';
import type { ComponentProps } from 'react';

export type IconName = Parameters<typeof DynamicIcon>[0]['name'];

export interface IconProps extends ComponentProps<'svg'> {
  name: IconName;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
} 