import { useState } from "react";

export default function Accordion({ title = "", description = "" }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="py-4">
      <button
        className="our-work-btn text-2xl sm:text-4xl md:text-5xl lg:text-6xl // mb-4"
        onClick={() => setIsOpened((prev) => !prev)}
        dangerouslySetInnerHTML={{
          __html: `${title}${
            isOpened
              ? '<i class="fa-solid fa-minus"></i>'
              : '<i class="fa-solid fa-plus"></i>'
          }`
        }}
      />
      {isOpened && (
        <div className="pannel">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      )}
    </div>
  );
}
