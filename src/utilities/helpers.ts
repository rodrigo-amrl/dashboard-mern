import { format } from "date-fns"
export function getDate(initialDate: string, finalDate: string) {
    if (!initialDate || !finalDate) return;

    const initial = new Date(initialDate)
    const final = new Date(finalDate)
    return format(initial, 'MMM dd, yyyy - HH:mm') + " - " + format(final, 'MMM dd, yyyy - HH:mm')
}