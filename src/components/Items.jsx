
export const Items = ({title, url}) => {
  return (
    <div className="flex flex-col items-center h-full transition-transform transform hover:scale-110">
    <img
      src={url}
      alt={title}
      className="w-full h-auto max-h-48 object-cover transition-transform transform hover:scale-110"
    />
    <p className="mt-auto font-bold">{title}</p>
  </div>

  );
}
