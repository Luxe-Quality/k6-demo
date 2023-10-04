import { sleep, check, group } from 'k6';
import http from 'k6/http';
import { randomIntBetween } from '../common/utils.js';

export function navigateToHomePage() {  
  
  let response;

  group('Navigate to Home Page', function () {
    response = http.get('https://luxequality.com/', {
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

    sleep(0.6);

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

    response = http.get('https://luxequality.com/_next/static/media/2560_picture2.fa1aad0a.svg', {
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

    response = http.get(
      'https://luxequality.com/_next/static/media/free_testing_pictures2.c978d159.svg',
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
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FQAQCEngineering.6063fdf9.png&w=1920&q=75',
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
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FManualTesting.3e2c27b2.png&w=1920&q=75',
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

    response = http.get('https://luxequality.com/_next/static/media/2560_back%201.b3a8b5e4.jpg', {
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

    response = http.get(
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FAutomatedTesting.a08dfdcc.png&w=1920&q=75',
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
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FMobileAppTesting.190a6944.png&w=1920&q=75',
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
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FWebAppTesting.f4dfb511.png&w=1920&q=75',
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
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FUIUXTesting.5d1741b4.png&w=1920&q=75',
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
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FSecurityTesting.090c07bd.png&w=1920&q=75',
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
      'https://luxequality.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FAPITesting.5128768e.png&w=1920&q=75',
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

    response = http.get('https://luxequality.com/_next/static/media/2560_back%204.3ac46a89.jpg', {
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

    sleep(1.3);

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

    sleep(0.5);

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

    sleep(0.7);

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

    sleep(randomIntBetween(globalThis.PAUSE_MIN, globalThis.PAUSE_MAX));
  });
}
