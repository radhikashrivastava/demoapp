
type PageProps = {
  params: Promise<{ name: string }>
}

export default async function Page({ params }: PageProps) {
  const { name } = await params
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {name}
    </div>
  );
}
