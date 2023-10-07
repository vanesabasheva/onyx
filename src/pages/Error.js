import MainNavigation from "../components/Navigation/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Възникна грешка!</h1>
        <p>Страницата, която търсите не съществува!</p>
      </main>
    </>
  );
}

export default ErrorPage;
