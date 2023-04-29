import { parseISO, format, isValid } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  const isValidDate = isValid(date)

  if (!isValidDate) {
    return null
  }

  return (
    <time className="text-slate-400" dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default DateFormatter
