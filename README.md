# Vite App

![License](https://img.shields.io/github/license/strawhat19/Vite-App)
![State](https://img.shields.io/github/deployments/strawhat19/Vite-App/github-pages)
![Total Lines](https://img.shields.io/tokei/lines/github/strawhat19/Vite-App)
![Repo Size](https://img.shields.io/github/repo-size/strawhat19/Vite-App)
![Release](https://img.shields.io/github/v/release/strawhat19/Vite-App)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

![Screenshot of Application](./src/assets/v03.png)

## About
A simple app made with Vite, React, React Router, React Router DOM, React Lazy, React Suspense, TypeScript, Context API, and SASS. Will implement Firebase for Auth, Storage, and Database purposes, as well as some Server Side Rendering soon.

## Table of Contents  
* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Licensing](#licensing)
* [Questions](#questions)

## Installation
```
git clone git@github.com:strawhat19/Vite-App.git
cd Vite-App/
npm install
npm run dev
```

## Usage
You can view the deployed application at https://strawhat19.github.io/Vite-App/

You can view the code at https://github.com/strawhat19/Vite-App

### Add a page
```
In the src/ directory add a new folder (/newpage)
Place an index.html inside it (/newpage/index.html)
Add necessary imports & Change Title (<title>New Page</title>)

Write the body
<body>
      <div id="root"></div>
      <script type="module" src="./server.tsx"></script>
</body>
      
Add the necessary entry file (/newpage/server.tsx)

import * as React from 'react';
import NewPage from './newpage';
import * as ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewPage />
  </React.StrictMode>
)

Add the necessary render file or component (/newpage/newpage.tsx)
Make the component with necessary imports & shared state as needed

Go to vite.config.ts
Add new input

Go to server.tsx (main one in /src)
Add route for new page

Go to app.tsx
Add relative paths for this page
Conditionally render the component in dev

Go to /components/header
Add new link to both header and pageheader
```

## Licensing
#### 
      MIT License

      Copyright (C) 2012-2023 by various contributors (see AUTHORS)

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.
      
      Copyright 1998 by the Massachusetts Institute of Technology.

      Permission to use, copy, modify, and distribute this software and its
      documentation for any purpose and without fee is hereby granted, provided that
      the above copyright notice appear in all copies and that both that copyright
      notice and this permission notice appear in supporting documentation, and that
      the name of M.I.T. not be used in advertising or publicity pertaining to
      distribution of the software without specific, written prior permission.
      M.I.T. makes no representations about the suitability of this software for any
      purpose.  It is provided "as is" without express or implied warranty.
#### https://opensource.org/licenses/MIT

## Questions
#### GitHub Profile: [*strawhat19*](https://github.com/strawhat19)
#### Contact me or ask me questions at [rahmed@piratechs.com](mailto:rahmed@piratechs.com).