interface Props {
    children: JSX.Element|JSX.Element[]
    rest: any
    tag: keyof JSX.IntrinsicElements
}

const NewComponent: React.FunctionComponent<Props & React.HTMLAttributes<HTMLOrSVGElement>> = ({
    tag: Wrapper = "div",
    children,
    ...rest
  }) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

export default NewComponent;