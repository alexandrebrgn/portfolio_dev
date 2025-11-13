import Markdown  from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Link from 'next/link';
import { Components } from 'react-markdown';
import { BsMarkdownFill } from 'react-icons/bs';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  const components: Components = {
    // Titres
    h1: ({ node, ...props }) => (
      <h1 className="markdown-h1" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="markdown-h2" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="markdown-h3" {...props} />
    ),
    h4: ({ node, ...props }) => (
      <h4 className="markdown-h4" {...props} />
    ),
    h5: ({ node, ...props }) => (
      <h5 className="markdown-h5" {...props} />
    ),
    h6: ({ node, ...props }) => (
      <h6 className="markdown-h6" {...props} />
    ),
    
    // Paragraphes
    p: ({ node, children, ...props }) => {
      // Si le paragraphe contient uniquement une image, on ne l'enveloppe pas dans <p>
      const hasImage = node?.children?.some((child: any) => child.tagName === 'img');
      if (hasImage) {
        return <>{children}</>;
      }
      return <p className="markdown-p" {...props}>{children}</p>;
    },
    
    // Images (markdown et HTML)
    img: ({ node, src, alt, ...props }: any) => {
      if (!src) return null;
      
      // Extraire les attributs HTML si présents
      const width = props.width ? parseInt(props.width.toString()) : undefined;
      const height = props.height ? parseInt(props.height.toString()) : undefined;
      const style = props.style || {};
      const className = props.className || '';
      
      // Calculer les dimensions
      let finalWidth = width && width < 2000 ? width : 1200;
      let finalHeight = height || Math.round(finalWidth * 0.6);
      
      return (
        <div className={`markdown-img-wrapper border-2 border-[var(--gray-500)] ${className}`}>
            
          <img
            
            src={src}
            alt={alt || ''}
            width={finalWidth}
            height={finalHeight}
            className="markdown-img"
            style={style}
            // unoptimized={src.startsWith('/')}
          />
        </div>
      );
    },
    
    // Liens
    a: ({ node, href, children, ...props }: any) => {
      if (!href) return <>{children}</>;
      
      // Liens externes
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="markdown-link markdown-link-external"
            {...props}
          >
            {children}
          </a>
        );
      }
      
      // Liens internes
      return (
        <Link href={href} className="markdown-link markdown-link-internal" {...props}>
          {children}
        </Link>
      );
    },
    
    // Listes
    ul: ({ node, ...props }) => (
      <ul className="markdown-ul" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="markdown-ol" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="markdown-li" {...props} />
    ),
    
    // Code inline et blocs
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      if (inline) {
        return (
          <code className="markdown-code-inline" {...props}>
            {children}
          </code>
        );
      }
      
      return (
        <pre className="markdown-pre">
          <code className={`markdown-code-block ${className || ''}`} data-language={language} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    
    // Blockquotes
    blockquote: ({ node, ...props }) => (
      <blockquote className="markdown-blockquote" {...props} />
    ),
    
    // Tableaux (GitHub Flavored Markdown)
    table: ({ node, ...props }) => (
      <div className="markdown-table-wrapper">
        <table className="markdown-table" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead className="markdown-thead" {...props} />
    ),
    tbody: ({ node, ...props }) => (
      <tbody className="markdown-tbody" {...props} />
    ),
    tr: ({ node, ...props }) => (
      <tr className="markdown-tr" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th className="markdown-th" {...props} />
    ),
    td: ({ node, ...props }) => (
      <td className="markdown-td" {...props} />
    ),
    
    // HTML brut (div, span, etc.)
    div: ({ node, className, style, ...props }: any) => (
      <div className={`markdown-div ${className || ''}`} style={style} {...props} />
    ),
    span: ({ node, className, style, ...props }: any) => (
      <span className={`markdown-span ${className || ''}`} style={style} {...props} />
    ),
    
    // Texte en gras et italique
    strong: ({ node, ...props }) => (
      <strong className="markdown-strong" {...props} />
    ),
    em: ({ node, ...props }) => (
      <em className="markdown-em" {...props} />
    ),
    
    // Ligne horizontale
    hr: ({ node, ...props }) => (
      <hr className="markdown-hr" {...props} />
    ),
  };

  return (
    <div className={`markdown-content ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </Markdown>
    </div>
  );
}
