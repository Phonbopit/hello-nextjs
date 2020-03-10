import fetch from 'isomorphic-unfetch';

const Meow = ({ file }) => {
  return <img src={file} />;
};

Meow.getInitialProps = async () => {
  const res = await fetch('https://aws.random.cat/meow');
  const data = await res.json();
  return data;
};

export default Meow;
