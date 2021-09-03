export const dark-mode = "dark-mode"

export function darkModeAction(variable) {
    return { 
        type: dark-mode,
        payload: variable
    }
}