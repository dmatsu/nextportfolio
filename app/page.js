// app/page.js

import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>こんにちわ</h1>
      <Link href="/contact">Contactページへ移動</Link>
    </div>
  );
}

export default Index;