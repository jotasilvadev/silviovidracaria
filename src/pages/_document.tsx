import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
      <Html lang="pt-br">
          <Head>
              <title>Silvio Vidraçaria - Balneário Camboriú</title>
              <meta
                  name="description"
                  content="Transforme sua casa em um verdadeiro lar com nossos serviços. Vidros para porta, box, janela, cortina de
                          vidro, fechamento de sacada, guarda corpo de piscina, pergolados, espelhos com bizote e corrimão de aço inox. Garantimos a qualidade e segurança em cada projeto, entre em contato agora e veja como podemos transformar o seu lar em um espaço ainda mais
                          confortável e elegante."
              ></meta>
              <meta
                  name="keywords"
                  content="Vidraçaria, Vidro Temperado, espelho, box, janela, pergolado, sacada, cortina de vidro, Balneário Camboriú"
              />
              <meta name="author" content="João Paulo da Silva" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
              <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=G-RZV4TZG9R6"
              ></script>
              <script>
                  window.dataLayer = window.dataLayer || [];
                  {/* @ts-ignore */}
                  function gtag(){dataLayer.push(arguments)}
                  gtag('js', new Date()); gtag('config', 'G-RZV4TZG9R6');
              </script>
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  );
}
