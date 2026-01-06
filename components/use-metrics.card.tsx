interface UserMetricsCardProps {
    metric: string
    label: string
    linkText?: string
    subtext?: string
    hasLink?: boolean
  }
  
  export function UserMetricsCard({ metric, label, linkText, subtext, hasLink = true }: UserMetricsCardProps) {
    return (
      <div className="bg-secondary/30 rounded-lg p-6 text-center">
        <div className="text-4xl font-semibold text-blue-700 mb-2">{metric}</div>
        <p className="text-sm font-medium text-black-800 mb-1">{label}</p>
        {subtext && <p className="text-xs text-blue-800 mb-2">{subtext}</p>}
        {hasLink && linkText && (
          <button className="text-sm text-blue-400 hover:underline cursor-pointer">{linkText}</button>
        )}
      </div>
    )
  }
  