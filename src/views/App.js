import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import Layout from 'components/Layout';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

function App() {
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

  // 1)
  // const fifteen = inventors.filter(function (inventor) {
  //   if (inventor.year >= 1500 && inventor.year < 1600) {
  //     return true;
  //   }
  // });

  const fifteen = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
  );

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const fullNames = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
  );

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  // 1)
  // const ordered = inventors.sort(function (firstPerson, secondPerson) {
  //   if (firstPerson.year > secondPerson.year) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });

  const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?

  // 1)
  // let totalYears = 0;

  // for (let i = 0; i < inventors.length; i++) {
  //   totalYears += inventors[i].year;
  // }
  // console.log(totalYears);

  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  console.log(totalYears);

  // 5. Sort the inventors by years lived

  const oldest = inventors.sort((a, b) => {
    const first = a.passed - a.year;
    const second = b.passed - b.year;
    // if (first < second) {
    //   return 1;
    // } else {
    //   return -1;
    // }
    return first > second ? -1 : 1;
  });

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // 7. sort Exercise
  // Sort the people alphabetically by last name

  const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    console.log(aFirst, bFirst);
    return aLast > bLast ? 1 : -1;
  });
  console.log(alpha);
  // 8. Reduce Exercise
  // Sum up the instances of each of these

  const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  console.log(transportation);

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <h3>Inventors:</h3>
          {fifteen.map((inventor) => (
            <p key={inventor.first}>{`${inventor.first} ${inventor.first}`}</p>
          ))}

          <h3>First and last array...</h3>
          {fullNames.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <h3>Inventors sorted by birthdate...</h3>
          {ordered.map((item) => (
            <p key={item.last}>{`${item.year}: ${item.first} ${item.last}`}</p>
          ))}
          <h3>Oldest...</h3>
          {oldest.map((item) => (
            <p key={item.last}>{`${item.passed - item.year}: ${item.first} ${
              item.last
            }`}</p>
          ))}
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
