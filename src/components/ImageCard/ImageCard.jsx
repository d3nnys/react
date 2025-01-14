export default function ImageCard({
  urls: { thumb, full },
  alt_description,
  onClick,
}) {
  return (
    <>
      <img
        src={thumb}
        width={400}
        alt={alt_description}
        onClick={() => onClick(full)}
      />
    </>
  );
}
