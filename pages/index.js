function Home() {
  return null;
}

export async function getServerSideProps(context) {
  context.res.writeHead(302, { Location: `/documents/Y8wDM` });
  context.res.end();

  return { props: {} };
}

export default Home;
