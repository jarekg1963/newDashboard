warning: LF will be replaced by CRLF in DashBoard/package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in DashBoard/package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in DashBoard/src/app/app.component.html.
The file will have its original line endings in your working directory
[1mdiff --git a/DashBoard/package-lock.json b/DashBoard/package-lock.json[m
[1mindex c407f43..069b9b1 100644[m
[1m--- a/DashBoard/package-lock.json[m
[1m+++ b/DashBoard/package-lock.json[m
[36m@@ -2195,6 +2195,11 @@[m
         "multicast-dns-service-types": "^1.1.0"[m
       }[m
     },[m
[32m+[m[32m    "bootstrap": {[m
[32m+[m[32m      "version": "4.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-rXqOmH1VilAt2DyPzluTi2blhk17bO7ef+zLLPlWvG494pDxcM234pJ8wTc/6R40UWizAIIMgxjvxZg5kmsbag=="[m
[32m+[m[32m    },[m
     "brace-expansion": {[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[36m@@ -2496,6 +2501,32 @@[m
       "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "chart.js": {[m
[32m+[m[32m      "version": "2.9.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-2.9.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-+2jlOobSk52c1VU6fzkh3UwqHMdSlgH1xFv9FKMqHiNCpXsGPQa/+81AFa+i3jZ253Mq9aAycPwDjnn1XbRNNw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "chartjs-color": "^2.1.0",[m
[32m+[m[32m        "moment": "^2.10.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "chartjs-color": {[m
[32m+[m[32m      "version": "2.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chartjs-color/-/chartjs-color-2.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-haqOg1+Yebys/Ts/9bLo/BqUcONQOdr/hoEr2LLTRl6C5LXctUdHxsCYfvQVg5JIxITrfCNUDr4ntqmQk9+/0w==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "chartjs-color-string": "^0.6.0",[m
[32m+[m[32m        "color-convert": "^1.9.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "chartjs-color-string": {[m
[32m+[m[32m      "version": "0.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chartjs-color-string/-/chartjs-color-string-0.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-TIB5OKn1hPJvO7JcteW4WY/63v6KwEdt6udfnDE9iCAZgy+V4SrbSxoIbTw/xkUIapjEI4ExGtD0+6D3KyFd7A==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "color-name": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "chokidar": {[m
       "version": "3.3.0",[m
       "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.0.tgz",[m
[36m@@ -2712,7 +2743,6 @@[m
       "version": "1.9.3",[m
       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",[m
       "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "color-name": "1.1.3"[m
       }[m
[36m@@ -2720,8 +2750,7 @@[m
     "color-name": {[m
       "version": "1.1.3",[m
       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",[m
[31m-      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="[m
     },[m
     "colors": {[m
       "version": "1.1.2",[m
[36m@@ -5353,6 +5382,11 @@[m
       "integrity": "sha1-43zwsX8ZnM4jvqcbIDk5Uka07E4=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "jquery": {[m
[32m+[m[32m      "version": "3.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/jquery/-/jquery-3.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-36+AdBzCL+y6qjw5Tx7HgzeGCzC81MDDgaUP8ld2zhx58HdqXGoBd+tHdrBMiyjGQs0Hxs/MLZTu/eHNJJuWPw=="[m
[32m+[m[32m    },[m
     "js-tokens": {[m
       "version": "3.0.2",[m
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",[m
[36m@@ -6822,6 +6856,11 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "moment": {[m
[32m+[m[32m      "version": "2.24.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/moment/-/moment-2.24.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-bV7f+6l2QigeBBZSM/6yTNq4P2fNpSWj/0e7jQcy87A8e7o2nAfP/34/2ky5Vw4B9S446EtIhodAzkFCcR4dQg=="[m
[32m+[m[32m    },[m
     "move-concurrently": {[m
       "version": "1.0.1",[m
       "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",[m
[36m@@ -7644,6 +7683,11 @@[m
         "find-up": "^3.0.0"[m
       }[m
     },[m
[32m+[m[32m    "popper.js": {[m
[32m+[m[32m      "version": "1.16.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/popper.js/-/popper.js-1.16.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-+G+EkOPoE5S/zChTpmBSSDYmhXJ5PsW8eMhH8cP/CQHMFPBG/kC9Y5IIw6qNYgdJ+/COf0ddY2li28iHaZRSjw=="[m
[32m+[m[32m    },[m
     "portfinder": {[m
       "version": "1.0.25",[m
       "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.25.tgz",[m
[36m@@ -9772,6 +9816,14 @@[m
       "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "tooltip.js": {[m
[32m+[m[32m      "version": "1.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tooltip.js/-/tooltip.js-1.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-XWWuy/dBdF/F/YpRE955yqBZ4VdLfiTAUdOqoU+wJm6phJlMpEzl/iYHZ+qJswbeT9VG822bNfsETF9wzmoy5A==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "popper.js": "^1.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "tough-cookie": {[m
       "version": "2.4.3",[m
       "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",[m
[1mdiff --git a/DashBoard/package.json b/DashBoard/package.json[m
[1mindex 381eabe..fb9e70e 100644[m
[1m--- a/DashBoard/package.json[m
[1m+++ b/DashBoard/package.json[m
[36m@@ -19,7 +19,12 @@[m
     "@angular/platform-browser": "~8.1.0",[m
     "@angular/platform-browser-dynamic": "~8.1.0",[m
     "@angular/router": "~8.1.0",[m
[32m+[m[32m    "bootstrap": "^4.3.1",[m
[32m+[m[32m    "chart.js": "^2.9.3",[m
[32m+[m[32m    "jquery": "^3.4.1",[m
[32m+[m[32m    "popper.js": "^1.16.0",[m
     "rxjs": "~6.4.0",[m
[32m+[m[32m    "tooltip.js": "^1.3.3",[m
     "tslib": "^1.9.0",[m
     "zone.js": "~0.9.1"[m
   },[m
[1mdiff --git a/DashBoard/src/app/app.component.html b/DashBoard/src/app/app.component.html[m
[1mindex 0f3d9d8..0da83d1 100644[m
[1m--- a/DashBoard/src/app/app.component.html[m
[1m+++ b/DashBoard/src/app/app.component.html[m
[36m@@ -1,21 +1,2 @@[m
[31m-<!--The content below is only a placeholder and can be replaced.-->[m
[31m-<div style="text-align:center">[m
[31m-  <h1>[m
[31m-    Welcome to {{ title }}![m
[31m-  </h1>[m
[31m-  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">[m
[31m-</div>[m
[31m-<h2>Here are some links to help you start: </h2>[m
[31m-<ul>[m
[31m-  <li>[m
[31m-    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>[m
[31m-  </li>[m
[31m-  <li>[m
[31m-    <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>[m
[31m-  </li>[m
[31m-  <li>[m
[31m-    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>[m
[31m-  </li>[m
[31m-</ul>[m
[31m-[m
[31m-<router-outlet></router-outlet>[m
[32m+[m[32m<app-navbar></app-navbar>[m
[32m+[m[32m<app-sidebar></app-sidebar>[m
