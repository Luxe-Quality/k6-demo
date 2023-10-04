import { sleep, check, group } from 'k6';
import http from 'k6/http';
import { randomIntBetween } from '../common/utils.js';

export function navigateToBlogPage() {  
  
  let response;

  group('Navigate to Blog Page', function () {
    response = http.get('https://luxequality.com/blog/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/71105a02f5403e0e.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/c36edd1302a65fe5.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/webpack-4b5955dd42308d89.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/framework-73b8966a3c579ab0.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/main-7583f6cfa281198b.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/_app-4b8e6bf813c100b4.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/308-df5859efedbf0b00.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/132-63f011bbfc7d4138.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/881-c6c32314331696cc.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/266-235a0f05f884b026.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/28-0b69470f15307e2d.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/blog-71ae1bd94b0a34d9.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/Ln8HJDX2HA7t7PsUGxCyH/_buildManifest.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/Ln8HJDX2HA7t7PsUGxCyH/_ssgManifest.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/media/Inter-Regular.8c0fe73b.ttf', {
      headers: {
        origin: 'https://luxequality.com',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/media/Inter-ExtraBold.30e41037.ttf', {
      headers: {
        origin: 'https://luxequality.com',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/media/logo2.30f82c75.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    sleep(1.2);

    response = http.get('https://luxequality.com/_next/static/chunks/314-10548e40c2bee8fd.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/425-63c9f94eed43111d.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/57-72b73d0b59aa849e.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/222-293691f5eef0f26c.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/index-50dfe9f2e046f276.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/about-us-0c9ab5d5ea840537.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/397-760f4d29f377a855.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/case-studies-7aa6f6de8f2a98f5.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/c36edd1302a65fe5.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/about-us-0c9ab5d5ea840537.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/cc6f2c484b92af45.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/314-10548e40c2bee8fd.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/425-63c9f94eed43111d.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/57-72b73d0b59aa849e.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/222-293691f5eef0f26c.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/index-50dfe9f2e046f276.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/fcdda222d275c0d6.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/179ee3200a68f0ed.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/397-760f4d29f377a855.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/case-studies-7aa6f6de8f2a98f5.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/747357a209644067.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/image/?url=https%3A%2F%2Fimages.prismic.io%2Fluxe-qulality%2F7d4f7f65-b700-45b8-bdd2-ddbb404f01ba_How%2Bto%2Bautomate%2Bapi%2Btesting.png%3Fauto%3Dcompress%2Cformat&w=1920&q=75',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/image/?url=https%3A%2F%2Fimages.prismic.io%2Fluxe-qulality%2F569458c6-7288-42db-a021-7c5e8b710c74_load%2Btesting.png%3Fauto%3Dcompress%2Cformat&w=1920&q=75',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/image/?url=https%3A%2F%2Fimages.prismic.io%2Fluxe-qulality%2F49e4e9fd-8040-4db4-acd4-530c88de18c2_How%2Bto%2BPerform%2BPenetration%2BTesting_.png%3Fauto%3Dcompress%2Cformat&w=1920&q=75',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/blog/%5Buid%5D-cd1785c766eb367e.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/blog/%5Buid%5D-cd1785c766eb367e.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/media/cookie.bdf84b38.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/229-9b423b70699fc348.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/cookie-policy-654ff4c2ddb136fa.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/favicon.ico', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/chunks/229-9b423b70699fc348.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get(
      'https://luxequality.com/_next/static/chunks/pages/cookie-policy-654ff4c2ddb136fa.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    );
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    response = http.get('https://luxequality.com/_next/static/css/d9e4f1734f4ee122.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
      'is body not empty': (r) => r.body.length > 0,
    });

    sleep(randomIntBetween(globalThis.PAUSE_MIN, globalThis.PAUSE_MAX));
  });
}
