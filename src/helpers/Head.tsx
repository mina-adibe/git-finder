import { useEffect } from "react";
import { HeadProps } from "../types/types";

const Head = ({ title, description }: HeadProps) => {
  useEffect(() => {
    document.title = `GitHub Finder ${title ? `| ${title}` : ""}`;

    //TODO: fix this type
    document
      .querySelector<HTMLInputElement | any>('meta[name="description"]')
      .setAttribute("content", description || "");
  }, [description, title]);

  return null;
};

export default Head;
