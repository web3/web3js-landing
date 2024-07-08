type Props = {
    type?: 'primary' | 'secondary'
    children: any;
    className?: string;
  };
  
  export default function TextDescription({ children, type, className }: Props) {
    let styles;
    if (type === 'primary') {
      styles = `text-xl font-semibold text-white`;
      
    } else if (type === 'secondary') {
      styles = `text-xl font-semibold text-slate-400`;
    }
  
    return (
      <h2
        className={`${className} ${styles}`}>
        {children}
      </h2>
    );
  }
  