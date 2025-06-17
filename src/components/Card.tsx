'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card = ({ title, description, imageUrl, link }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-primary-200 hover:border-accent transition-colors">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-primary/80 mb-4">{description}</p>
        <Link
          href={link}
          className="inline-block bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card; 