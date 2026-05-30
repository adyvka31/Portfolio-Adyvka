import { useState, useRef, useEffect } from "react";
import "./Image.css";

export default function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  const isPicture = typeof src === "object" && src !== null && "sources" in src;

  // Memastikan skeleton hilang jika gambar dimuat instan dari cache browser
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const loadingClass = isLoaded ? "img-loaded" : "img-skeleton";
  const combinedClassName = `${className} ${loadingClass}`.trim();

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
          ref={imgRef}
          src={src.img.src}
          alt={alt}
          width={width || src.img.w}
          height={height || src.img.h}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={combinedClassName}
          onLoad={() => setIsLoaded(true)}
          {...rest}
        />
      </picture>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      sizes={sizes}
      className={combinedClassName}
      onLoad={() => setIsLoaded(true)}
      {...rest}
    />
  );
}
