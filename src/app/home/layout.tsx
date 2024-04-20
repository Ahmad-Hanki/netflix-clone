import Navbar from "@/components/Navbar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
