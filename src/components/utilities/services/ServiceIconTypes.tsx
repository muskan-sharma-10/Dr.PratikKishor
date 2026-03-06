import { FC, MouseEventHandler } from 'react';
import { LucideProps } from 'lucide-react';

// Type for the custom icon component
type CustomIconComponent = FC<LucideProps>;

// Props interface for the ServiceIcon component
interface ServiceIconProps {
  icon: FC<LucideProps>;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  customIcon?: boolean;
}

// Type definition for the ServiceIcon component
type ServiceIcon = FC<ServiceIconProps>;

// Usage example (commented out)
// const ServiceIcon: ServiceIcon = ({ icon: Icon, isActive, onClick, customIcon }) => {
//   // Component implementation
// };

export type { ServiceIcon, ServiceIconProps, CustomIconComponent };