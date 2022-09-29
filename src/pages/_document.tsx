import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const description =
  'Incrementa tu alcance como desarrollador y llega hasta la luna!'

class MyDocument extends Document {
  render() {
    return (
      <Html className="motion-safe:scroll-smooth">
        <Head>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
 const COUNT = 800;
 const SPEED = 0.1;

  class Star {
    x
    y
    z
    xPrev
    yPrev

    constructor(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.xPrev = x;
      this.yPrev = y;
    }

    update(width, height, speed) {
      this.xPrev = this.x;
      this.yPrev = this.y;
      this.z += speed * 0.0675;
      this.x += this.x * (speed * 0.0225) * this.z;
      this.y += this.y * (speed * 0.0225) * this.z;
      if (
        this.x > width / 2 ||
        this.x < -width / 2 ||
        this.y > height / 2 ||
        this.y < -height / 2
      ) {
        this.x = Math.random() * width - width / 2;
        this.y = Math.random() * height - height / 2;
        this.xPrev = this.x;
        this.yPrev = this.y;
        this.z = 0;
      }
    }

    draw(ctx) {
      ctx.lineWidth = this.z;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.xPrev, this.yPrev);
      ctx.stroke();
    }
  }

  const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
  let rafId = 0;

  const canvas = document.querySelector("#starfield-canvas");
  const ctx = canvas.getContext("2d");

  const container = document.querySelector("#starfield");
  const resizeObserver = new ResizeObserver(setup);
  resizeObserver.observe(container);

  function setup() {
    rafId > 0 && cancelAnimationFrame(rafId);
    const { clientWidth: width, clientHeight: height } = container;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    for (const star of stars) {
      star.x = Math.random() * width - width / 2;
      star.y = Math.random() * height - height / 2;
      star.z = 0;
    }

    ctx.translate(width / 2, height / 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "white";
    rafId = requestAnimationFrame(frame);
  }

  function frame() {
    const { clientWidth: width, clientHeight: height } = container;

    for (const star of stars) {
      star.update(width, height, SPEED);
      star.draw(ctx);
    }

    ctx.fillRect(-width / 2, -height / 2, width, height);
    rafId = requestAnimationFrame(frame);
  }
    `
            }}
            strategy="lazyOnload"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
            media="print"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
            />
          </noscript>
          <meta
            name="description"
            content="Incrementa tu alcance como desarrollador y llega hasta la luna!"
          />
          <link rel="icon" href="/favicon.png" />
          <meta property="og:title" content="Selfcommit" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://selfcommit.dev/social.jpg"
          />
          <meta property="og:url" content="https://selfcommit.dev/" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
