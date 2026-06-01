import type { ComponentPropsWithoutRef, ElementType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = Record<string, any>;

export type PolymorphicProps<
  C extends ElementType,
  Props extends AnyProps = AnyProps
> = Props & Omit<ComponentPropsWithoutRef<C>, keyof Props> & { as?: C };
