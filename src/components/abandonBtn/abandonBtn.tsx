import { Link } from 'react-router-dom'

function AbandonBtn({ label, path }: { label: string, path: string }) {
  return (
    <Link
      className="p-2 mt-6 text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500"
      to={path}
    >
      {label}
    </Link>
  )
}

export default AbandonBtn