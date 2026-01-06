interface UserMetricsCardData {
    userId?: number
    id?: number
    title?: string
    completed?: boolean
    selectedDays?: number
    // you can add more fields as needed
  }
interface UserMetricsCardProps {
    metric: string
    label: string
    linkText?: string
    subtext?: string
    hasLink?: boolean
    data: UserMetricsCardData | null
  
  }
  
  
  export function UserMetricsCard({ metric, label, linkText, subtext, hasLink = true, data }: UserMetricsCardProps) {
    if (!data) return null
    return (
      <div className="bg-secondary/30 rounded-lg p-6 text-center">
        <div>{data.title}</div>
        <div className="text-4xl font-semibold text-blue-700 mb-2">{metric}</div>
        <p className="text-sm font-medium text-black-800 mb-1">{label}</p>
        {subtext && <p className="text-xs text-blue-800 mb-2">{subtext}</p>}
        {hasLink && linkText && (
          <button className="text-sm text-blue-400 hover:underline cursor-pointer">{linkText}</button>
        )}
      </div>
    )
  }
  