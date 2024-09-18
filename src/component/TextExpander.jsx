import React, { useState } from "react";

const TextExpander = ({
  children,
  collapsedWords = 10,
  expandButtonText = "Show more",
  collapsedButtonText = "Show less",
  buttonColor = "text-blue-500",
  className,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const togggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const displayText = isCollapsed ? children.split(" ").slice(0, collapsedWords).join(" ")+"..." : children;

  return (
    <div className={className}>
      <span>{displayText}</span>{" "}
      <button className={buttonColor} onClick={() => togggleCollapsed()}>
        {isCollapsed ? expandButtonText : collapsedButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
