import React, { useState, ReactElement } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  children: ReactElement<AccordionItemProps>[];
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  children, 
  type = 'single', 
  collapsible = false,
  className = ''
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemValue: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(itemValue) ? [] : [itemValue]);
    } else {
      setOpenItems(
        openItems.includes(itemValue)
          ? openItems.filter((item) => item !== itemValue)
          : [...openItems, itemValue]
      );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            isOpen: openItems.includes(child.props.value),
            onToggle: () => toggleItem(child.props.value),
            collapsible,
          });
        }
        return child;
      })}
    </div>
  );
};

interface AccordionItemProps {
  children: ReactElement<AccordionTriggerProps | AccordionContentProps>[];
  value: string;
  isOpen?: boolean;
  onToggle?: () => void;
  collapsible?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  children, 
  isOpen, 
  onToggle, 
  collapsible,
  className = ''
}) => (
  <div className={`bg-white/95 border-b border-zinc-200 last:border-b-0 ${className}`}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement<AccordionTriggerProps | AccordionContentProps>(child)) {
        return React.cloneElement(child, { isOpen, onToggle, collapsible });
      }
      return child;
    })}
  </div>
);

interface AccordionTriggerProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  collapsible?: boolean;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ 
  children, 
  isOpen, 
  onToggle, 
  collapsible,
  className = ''
}) => (
  <button
    className={`w-full flex items-center justify-between px-4 py-4 text-left 
    text-zinc-800 hover:text-teal-600 font-medium transition-colors duration-200
    focus:outline-none ${className}`}
    onClick={onToggle}
    disabled={isOpen && !collapsible}
    aria-expanded={isOpen}
  >
    <span>{children}</span>
    <ChevronDown 
      className={`w-5 h-5 text-zinc-500 transition-transform duration-200
      ${isOpen ? 'transform rotate-180' : ''}`}
    />
  </button>
);

interface AccordionContentProps {
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ 
  children, 
  isOpen,
  className = ''
}) => (
  <div
    className={`overflow-hidden transition-all duration-200 ease-in-out
    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
    ${className}`}
  >
    <div className="px-4 py-3 text-zinc-600">
      {children}
    </div>
  </div>
);

export default Accordion;