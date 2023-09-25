import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error || !data) throw error;

  const firstTrailer = data.results[0];

  return firstTrailer ? (
    <video
      poster={firstTrailer.preview}
      src={firstTrailer.data[480]}
      controls
    />
  ) : null;
};
export default GameTrailer;
