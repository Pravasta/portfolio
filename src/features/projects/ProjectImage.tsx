import { useState } from 'react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  /** Emoji shown in the gradient fallback when the image is missing. */
  emoji: string;
  /** Tailwind gradient classes for the fallback background. */
  color: string;
  className?: string;
  emojiClassName?: string;
}

/**
 * Renders a project image, falling back to a gradient + emoji placeholder when
 * the source is missing or fails to load. This keeps the layout intact whether
 * or not real images have been dropped into `public/projects/<slug>/`.
 */
export const ProjectImage = ({
  src,
  alt,
  emoji,
  color,
  className = '',
  emojiClassName = 'text-6xl',
}: ProjectImageProps) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`bg-gradient-to-br ${color} flex items-center justify-center ${className}`}
        aria-label={alt}
        role="img"
      >
        <span className={emojiClassName}>{emoji}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
};
