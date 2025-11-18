import Link from 'next/link';
import Image from 'next/image';
import { WorkProjectWithSlug } from '@/lib/work';

interface Props {
  project: WorkProjectWithSlug;
}

export default function ProjectCard({ project }: Props) {
  const { data, slug } = project;

  return (
    <Link href={`/work/${slug}`}
      className="
      card relative
      h-50 lg:h-80
      bg-gray-50 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-gradient-subtle border border-[var(--gray-800)]
      rounded-2xl lg:rounded-3xl
      overflow-hidden no-underline font-brand text-lg font-medium transition-shadow hover:shadow-xl"
    >
      <div className="
      absolute
      top-2 lg:top-4
      left-2 lg:left-4
      text-base lg:text-lg
      py-1 lg:py-2
      px-2 lg:px-4
      bg-[var(--gray-999)] text-[var(--gray-0)] w-auto z-50 m-2 border-1 border-[var(--gray-500)]
      rounded-lg lg:rounded-xl">
        {data.title}
      </div>

      {data.tags && (
        <div className="
        absolute
        bottom-2 lg:bottom-4
        left-2 lg:left-4
        flex gap-2 z-50"
        >
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="
              text-[var(--gray-0)] bg-[var(--gray-999)]
              text-xs lg:text-sm
              py-1 px-4
              border-1 border-[var(--gray-500)]
              rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Image
        src={data.img}
        alt={data.img_alt || ''}
        fill
        className="col-start-1 col-end-3 row-start-1 row-end-3 w-full h-full object-cover"
        loading="lazy"
      />
    </Link>
  );
}