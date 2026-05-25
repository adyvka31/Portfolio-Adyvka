// src/components/Image/Image.jsx
export default function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  ...rest
}) {
  const isPicture = typeof src === "object" && src !== null && "sources" in src;

  if (isPicture) {
    return (
      <picture style={{ display: "contents" }}>
        {Object.entries(src.sources).map(([format, srcSet]) => (
          <source
            key={format}
            srcSet={srcSet}
            type={`image/${format}`}
            sizes={sizes}
          />
        ))}
        <img
          src={src.img.src}
          alt={alt}
          width={width || src.img.w}
          height={height || src.img.h}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchpriority={priority ? "high" : "auto"}
          className={className}
          {...rest}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchpriority={priority ? "high" : "auto"}
      sizes={sizes}
      className={className}
      {...rest}
    />
  );
}
