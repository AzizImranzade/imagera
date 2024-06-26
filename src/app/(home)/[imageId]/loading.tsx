export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-[15rem] w-[15rem] rounded-full border-4 border-l-cyan-500 animate-spin"></div>
    </div>
  );
}
