import { useState } from "react";

export default function Accordion({ title = "", description = "" }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <button
        className="our-work-btn"
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
