export const INC = "INC";
export const RESET = "RESET";
export const increment = ()=>{
    return {
        type:INC
    }
}

export const reset = ()=>{
    return {
        type:RESET
    }
}

