export default function Recommendation() {
  return (
    <>
    <div className="mb-20">
    navbar 
    </div>
      <div className="text-2xl font-bold text-black ml-4">
        For You Today
      </div>
      <div className="grid grid-cols-6 gap-4 bg-white p-4 mt-4">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <div
              className="h-40 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${movie.posterUrl})` }}
            ></div>
            <div className="p-4">
              <div className="text-center font-semibold">{movie.title}</div>
              <div className="flex justify-center items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < movie.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.104 3.396a1 1 0 00.95.69h3.573c.969 0 1.371 1.24.588 1.81l-2.892 2.103a1 1 0 00-.364 1.118l1.104 3.396c.3.921-.755 1.688-1.538 1.118l-2.893-2.103a1 1 0 00-1.175 0l-2.892 2.103c-.783.57-1.838-.197-1.539-1.118l1.105-3.396a1 1 0 00-.364-1.118L2.336 8.823c-.783-.57-.381-1.81.588-1.81h3.573a1 1 0 00.95-.69l1.104-3.396z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const movies = [
    { title: "Judul", rating: 4, posterUrl: "https://via.placeholder.com/150" },
    { title: "Judul", rating: 5, posterUrl: "" },
    { title: "Judul", rating: 3, posterUrl: "" },
    { title: "Judul", rating: 4, posterUrl: "" },
    { title: "Judul", rating: 5, posterUrl: "" },
    { title: "Judul", rating: 4, posterUrl: "" },
    { title: "Judul", rating: 4, posterUrl: "" },
    { title: "Judul", rating: 5, posterUrl: "" },
    { title: "Judul", rating: 3, posterUrl: "" },
    { title: "Judul", rating: 4, posterUrl: "" },
    { title: "Judul", rating: 4, posterUrl: "" },
    { title: "Judul", rating: 4, posterUrl: "" },
    
  ];