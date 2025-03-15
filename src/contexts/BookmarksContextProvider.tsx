export default function BookmarksContextProvider() {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  return <div>BookmarksContextProvider</div>;
}
