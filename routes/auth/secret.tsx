import Layout from "../../components/Layout.tsx";

export default function Secret() {
  return (
    <Layout isLoggedIn={true}>
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
          <h1 class="text-2xl font-bold mb-5 text-center">This route is protected!</h1>
          <img class="mx-auto mt-10" src="/secure.svg" alt="" />
      </div>
    </Layout>
  );
}