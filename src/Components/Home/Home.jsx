import React from 'react';
import './Home.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Home = () => {
   
    const codeString = `fetch('https://rest-api-woad-pi.vercel.app/api/products')
  .then((response) => response.json())
  .then((json) => console.log(json));
`;
    const output1 = `"_id": "6661436cb4d16da7eccd0633",
      "name": "iphone",
      "price": 6897,
      "featured": true,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "apple",
      "__v": 0`;

      const simpleSearch = ` fetch('https://rest-api-woad-pi.vercel.app/api/products?company=apple')
  .then((response) => response.json())
  .then((json) => console.log(json));
      `
      const simplesearchoutput = `{
      "_id": "6661436cb4d16da7eccd0634",
      "name": "ipad",
      "price": 6576,
      "featured": false,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "apple",
      "__v": 0
    }`
    const filtertwofields = ` fetch('https://rest-api-woad-pi.vercel.app/api/products?company=apple&name=iphone')
  .then((response) => response.json())
  .then((json) => console.log(json));
      `
      const filtertwofieldsoutput = ` {
      "_id": "6661436cb4d16da7eccd0633",
      "name": "iphone",
      "price": 6897,
      "featured": true,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "apple",
      "__v": 0
    }`

    const advancedsearch = `fetch('https://rest-api-woad-pi.vercel.app/api/products?company=apple&name=ipho')
  .then((response) => response.json())
  .then((json) => console.log(json));`;

  const advancedsearchoutput = `{
      "_id": "6661436cb4d16da7eccd0633",
      "name": "iphone",
      "price": 6897,
      "featured": true,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "apple",
      "__v": 0
    }`;

    const sorting = `fetch('https://rest-api-woad-pi.vercel.app/api/products?sort=price')
  .then((response) => response.json())
  .then((json) => console.log(json));`;

  const sortingOutput = `{
      "_id": "6661436cb4d16da7eccd0639",
      "name": "note7",
      "price": 1262,
      "featured": false,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "mi",
      "__v": 0
    },
    {
      "_id": "6661436cb4d16da7eccd0636",
      "name": "galaxys21",
      "price": 3464,
      "featured": false,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "samsung",
      "__v": 0
    },
    {
      "_id": "6661436cb4d16da7eccd0637",
      "name": "samwatch",
      "price": 5782,
      "featured": true,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "samsung",
      "__v": 0
    }
      etc...`;

      const getparticularfields = `fetch('https://rest-api-woad-pi.vercel.app/api/products?select=name,price')
  .then((response) => response.json())
  .then((json) => console.log(json));`;

  const getparticularfieldsoutput = `{
      "_id": "6661436cb4d16da7eccd0633",
      "name": "iphone",
      "price": 6897
    },
    {
      "_id": "6661436cb4d16da7eccd0635",
      "name": "iwatch",
      "price": 6492
    },
    {
      "_id": "6661436cb4d16da7eccd0636",
      "name": "galaxys21",
      "price": 3464
    }
      etc ...`;
      const pageandlimit = `fetch('https://rest-api-woad-pi.vercel.app/api/products?page=1&limit=2')
  .then((response) => response.json())
  .then((json) => console.log(json));`

  const pageandlimitoutput = ` {
      "_id": "6661436cb4d16da7eccd0633",
      "name": "iphone",
      "price": 6897,
      "featured": true,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "apple",
      "__v": 0
    },
    {
      "_id": "6661436cb4d16da7eccd0635",
      "name": "iwatch",
      "price": 6492,
      "featured": false,
      "rating": 5,
      "createdAt": "2024-06-06T05:04:43.854Z",
      "company": "apple",
      "__v": 0
    }`;


  return (
   
   <>
   <div className="home">
     <h1>Guide</h1>
     <div className='codeblock'>
        <div className="code">
     <h3>Get All Products</h3>
     <SyntaxHighlighter  className='codes'language="jsx" style={atomOneDark}>
     {codeString}
    </SyntaxHighlighter>
    <h3> Sample Output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {output1}
    </SyntaxHighlighter>
    </div>
    <div className="code">
    <h3>Filter by company</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {simpleSearch}
    </SyntaxHighlighter>
    <h3>Output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {simplesearchoutput}
    </SyntaxHighlighter>
    </div>
    <div className="code">
    <h3>Filter by company and product</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {filtertwofields}
    </SyntaxHighlighter>
    <h3>Output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {filtertwofieldsoutput}
    </SyntaxHighlighter>
    </div>
    <div className="code">
    <h3>Fetch products in case of incomplete search</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {advancedsearch}
    </SyntaxHighlighter>
    <h3>Output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {filtertwofieldsoutput}
    </SyntaxHighlighter>
    </div>
    <div className="code">
    <h3>Sorting by price (low to high)</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {sorting}
    </SyntaxHighlighter>
    <h3>Output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {sortingOutput}
    </SyntaxHighlighter>
    </div>
    <div className="code">
    <h3>Get only particular field in output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {getparticularfields}
    </SyntaxHighlighter>
    <h3>Output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {getparticularfieldsoutput}
    </SyntaxHighlighter>
    </div>
    <div className="code">
    <h3>Setting up page Numbers and limit</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {pageandlimit}
    </SyntaxHighlighter>
    <h3>Output</h3>
    <SyntaxHighlighter  className='codes' language="jsx" style={atomOneDark}>
      {pageandlimitoutput}
    </SyntaxHighlighter>
    </div>
     </div>
   </div>
   </>
  )
}

export default Home
