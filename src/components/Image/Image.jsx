import { useState, useRef, useEffect } from "react";
import "./Image.css";

export default function Image({
  src,
  alt = "",
  width,
  height,
  priority = false,
  className = "",
  containerClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  style,
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

  return (
    <div
      className={`img-skeleton-container ${isLoaded ? "is-loaded" : "is-loading"} ${priority ? "is-priority" : ""} ${containerClassName}`.trim()}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "block",
        ...style,
      }}
    >
      {!isLoaded && !priority && (
        <div className="img-skeleton-shimmer" aria-hidden="true" />
      )}
      {isPicture ? (
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
            fetchPriority={priority ? "high" : "low"}
            className={`img-element ${isLoaded ? "img-loaded" : "img-loading"} ${className}`.trim()}
            onLoad={() => setIsLoaded(true)}
            {...rest}
          />
        </picture>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "low"}
          sizes={sizes}
          className={`img-element ${isLoaded ? "img-loaded" : "img-loading"} ${className}`.trim()}
          onLoad={() => setIsLoaded(true)}
          {...rest}
        />
      )}
    </div>
  );
}
