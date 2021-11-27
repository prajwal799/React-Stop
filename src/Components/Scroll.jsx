import React, { useRef } from "react";
const Scroll = () => {
  const ref = useRef(null);
  const handleMoveToTop = () => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  };

  const handleMoveToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = 900;
    }
  };
  return (
    <>
      <button onClick={handleMoveToTop}>Move to Top</button>
      <button onClick={handleMoveToBottom}>Move To Bottom</button>
      <br /> <br />
      <div
        ref={ref}
        style={{
          width: "200px",
          margin: "auto",
          maxHeight: "200px",
          border: "1px solid black",
          overflow: "auto",
          padding: "20px"
        }}
      >
        <div
          style={{
            height: "1000px",
            border: "1px solid black",
            textAlign: "center"
          }}
        >
          <p>
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Scroll;
