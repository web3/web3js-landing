type Props = {
    type?: 'primary' | 'secondary'
    children: any;
    className?: string;
  };
  
  export default function SectionHeading({ children, type, className }: Props) {
    let styles;
    if (type === 'primary') {
      styles = `text-4xl font-medium tracking-tight text-cream sm:text-9xl`;
      
    } else if (type === 'secondary') {
      styles = `text-3xl font-semibold tracking-tight text-white sm:text-4xl`;
    }
  
    return (
      <h2
        className={`${className} ${styles}`}>
        {children}
      </h2>
    );
  }
  