export type TButtonVariant = 'solid' | 'outline';

export interface ButtonProps {
  label: string;
  onPress: () => void;
  variant: TButtonVariant;
}
