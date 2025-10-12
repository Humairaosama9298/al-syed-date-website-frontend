
export default function Footer() {
  return (
    <footer className="bg-primary text-center rounded-sm border-t border-gray-200 ">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center space-y-4">
           
            <p className="text-sm md:text-center text-white mt-2">
              © Al Syed Brothers {new Date().getFullYear()} - All rights reserved.
            </p>
            <p className="text-white/80">Exporting Premium Pakistani Dates Worldwide</p>
          </div>
          
        </div>
      </div>
    </footer>
  )
} 