
function ServiceCard({ number, image, title, description }) {
  return (
    <div
      className="
        group relative
        w-full
        h-75 sm:h-85
        rounded-3xl overflow-hidden
       
        transition-all duration-500 ease-out

        /* Desktop hover expand */
        lg:w-55 lg:hover:w-85 lg:h-95
        lg:shrink-0
       
       
        cursor-pointer
      "
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/60
          transition-all duration-500
          lg:group-hover:bg-black/80
        "
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-white">
        <span className="text-3xl text-center sm:text-4xl font-bold mb-2">
          {number}
        </span>

        <h3 className="font-semibold text-center  text-base sm:text-lg mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-sm text-gray-200 text-center leading-relaxed

            /* Mobile: always visible */
            opacity-100 max-h-40

            /* Desktop: only on hover */
            lg:opacity-0 lg:max-h-0
            lg:group-hover:opacity-100
            lg:group-hover:max-h-40

            transition-all duration-500
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;