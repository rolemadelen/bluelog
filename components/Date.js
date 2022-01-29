import { parseISO, format } from 'date-fns'

export default function Date({ dateString, customClass }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString} className={`text-secondary dark:text-dsecondary ${customClass}`}>{format(date, 'LLLL d, yyyy')}</time>
}