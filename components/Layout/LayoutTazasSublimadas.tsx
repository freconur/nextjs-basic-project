import LayoutMarginCenter from "./LayoutMarginCenter"


type Props = {
    children: JSX.Element | JSX.Element[]
}
const LayoutTazasSublimadas = ({ children }: Props) => {
    return (

        <LayoutMarginCenter>
            {children}
        </LayoutMarginCenter>
    )
}

export default LayoutTazasSublimadas
