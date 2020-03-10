import fetch from 'isomorphic-unfetch';

const Meow = ({ meow }) => {
  return <img src={meow.file} />;
};

export async function getStaticProps() {
  const res = await fetch('https://aws.random.cat/meow');
  const data = await res.json();

  return {
    props: {
      meow: data || {}
    }
  };
}

export default Meow;
