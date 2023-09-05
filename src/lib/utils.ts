type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locale = 'en') {
    return new Intl.DateTimeFormat(locale, { dateStyle }).format(new Date(date))
}