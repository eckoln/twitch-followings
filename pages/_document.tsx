import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static getInitialProps = async (ctx: any) => {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  };

  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased text-slate-400 bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
