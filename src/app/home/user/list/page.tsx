import prisma from "@/db/client";
import MovieCard from "@/components/MovieCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchList: true,
          youtubeString: true,
        },
      },
    },
  });

  return data;
}

const WatchListPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const id = user?.id;

  const data = await getData(id as string);

  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watchlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {data.map((movie) => (
          <div key={movie.movie?.id} className="relative h-60">
            <Image
              src={movie.movie?.imageString as string}
              alt="Movie"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
            />
            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                <Image
                  src={movie.movie?.imageString as string}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />

                <MovieCard
                  key={movie.movie?.id}
                  age={movie.movie?.age as number}
                  movieId={movie.movie?.id as number}
                  overview={movie.movie?.overview as string}
                  time={movie.movie?.duration as number}
                  title={movie.movie?.title as string}
                  wachtListId={movie.movie?.WatchList[0]?.id as string}
                  watchList={
                    (movie.movie?.WatchList.length as number) > 0
                      ? true
                      : false
                  }
                  year={movie.movie?.release as number}
                  youtubeUrl={movie.movie?.youtubeString as string}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchListPage;
