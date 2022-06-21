import SEO from "../../components/SEO";

interface Params {
  params: { params: string[] };
}

interface Props {
  params: string[];
}

// getServerSideProps에서 return한 params를 받아옴
export default function Detail({ params }: Props) {
  const [title, id] = params || [];
  return (
    <div>
      <SEO title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// next.js에서는 getServerSideProps에 server side context를 기본적으로 제공한다
// server side context 내에 params가 있ㅇ므
export function getServerSideProps({ params: { params } }: Params) {
  return {
    props: { params },
  };
}
