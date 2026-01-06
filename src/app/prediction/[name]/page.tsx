


export default function Page({params}: any) {
   
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {params.name}
    </div>
  );
}
