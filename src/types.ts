// import Button, { ButtonProps } from 'antd/lib/button';



export type ErrorState = {
    hasError: boolean
}

// !!!  Temp 
export type TempActions = {
    type: 'TEMP',
    payload: boolean
}

export type TempState = {
    Temp: boolean
}
// !!
export type ButtonProps = {
    variant?: 'sign' | undefined
    onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    value?: string | undefined

}
