import type { ButtonProps } from '../model/types';
const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
