import prisma from "@/db/client";
import Image from "next/image";
import MovieCard from "./MovieCard";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchList: true,
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}

const RecentlyAdded = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48 ">
          <Image
            src={movie.imageString}
            alt="movie"
            className="rounded-sm absolute w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 flex justify-center items-center">
            <Image
              src={movie.imageString}
              alt="photo"
              height={800}
              width={800}
              className="absolute h-full -z-10 rounded-lg w-full object-cover brightness-50"
            />
            <MovieCard
            movieId={movie.id}
            overview={movie.overview}
            title={movie.title}
            wachtListId={movie.WatchList[0]?.id}
            youtubeUrl={movie.youtubeString}
            watchList={movie.WatchList.length == 1 ? true : false}
            age={movie.age}
            time={movie.duration}
            year={movie.release}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;
