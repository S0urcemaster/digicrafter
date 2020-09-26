
enum display {
    none = 'none', block = 'block'
}

export const visible = (tf:boolean) => {return {
    display:tf?css.display.block:css.display.none,
}}

export const css =
{
    display: display,
    visible: (tf:boolean) => {return {
        display: tf ? css.display.block : css.display.none,
    }}
}