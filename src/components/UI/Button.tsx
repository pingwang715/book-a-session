import { Link, type LinkProps } from "react-router-dom";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  to?: never;
} & BaseProps;

type ButtonLinkProps = LinkProps & {
  to: string;
} & BaseProps;

function isRouterLink(
  props: ButtonProps | ButtonLinkProps,
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonLinkProps | ButtonProps) {
  if (isRouterLink(props)) {
    const {children, textOnly, ...otherProps} = props;
    return (
      <Link className={`button ${textOnly ? "button--text-only" : ""}`} {...otherProps}>{children}</Link>
    )
  }

  const {children, textOnly, ...otherProps} = props;

  return (
    <button className={`button ${textOnly ? "button--text-only" : ""}`} {...otherProps}>
      {children}
    </button>
  )

}
