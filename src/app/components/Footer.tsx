export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center space-y-2">
        <p className="text-sm">
          © Al Syed Brothers {new Date().getFullYear()} - All rights reserved.
        </p>
        <p className="text-white/80">
          Exporting Premium Pakistani Dates Worldwide
        </p>
      </div>
    </footer>
  )
}
