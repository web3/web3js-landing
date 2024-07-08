type Props = {
  type: 'primary' | 'secondary' | 'link' | 'frosted' | 'pluginDownload';
  children: any;
  href?: string;
  className?: string;
};

export default function Button({ type, children, href, className }: Props) {
  let styles;
  if (type === 'primary') {
    styles = `transition-all rounded-full border border-brand-400 text-brand-400 px-8 py-1 text-lg font-medium shadow-sm hover:brightness-[80%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200`;
    
  } else if (type === 'secondary') {
    styles = `transition-all rounded-full border-[1px] border-gray-700 text-gray-300 px-8 py-1 text-lg font-medium shadow-sm hover:brightness-[80%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200`;
  } else if (type === 'frosted') {
    styles = `transition-all rounded-xl bg-gray-100/20 px-3.5 py-2.5 text-md font-medium text-white shadow-sm hover:brightness-[90%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200`;
  } else if (type === 'pluginDownload') {
    styles = `transition-all rounded-full border-[1px] border-zinc-700 text-gray-300 px-3 py-1 text-md font-medium shadow-sm hover:brightness-[80%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200`
  } 
  else {
    styles = `transition-all text-md font-medium leading-6 hover:text-primary-100 `;
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`${className} ${styles}`}>
      {children}
    </a>
  );
}
