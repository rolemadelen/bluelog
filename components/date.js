import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString} className={"text-primary dark:text-dprimary"}>{format(date, 'LLLL d, yyyy')}</time>
}