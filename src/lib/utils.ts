import { type ClassValue, clsx } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = 'Agri-X',
  description = ' Agri-X, tempat inovasi bertemu dengan keberlanjutan. Kami menghadirkan teknologi cerdas untuk pertanian global yang lebih baik.',
  image = '/Agri-XLogo.png',
  icons = '/Agri-XLogo.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@codewithjay.io, @KINGDimsSky',
    },
    icons,
    metadataBase: new URL('https://agrinext.vercel.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
