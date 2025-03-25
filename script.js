const myLibrary = [
  {
    id: 'edde3b90-9c41-41fa-bf07-2c8462d8db5a',
    title: 'The Obstacle is the Way',
    author: 'Ryan Holiday',
    pages: '500',
    read: false,
    cover: 'https://m.media-amazon.com/images/I/71Tze+xZcgL.jpg',
  },
  {
    id: '59aef1e7-f437-4158-931a-14a70bec303b',
    title: 'Golf Is a Game of Confidence',
    author: 'Dr. Bob Rotella',
    pages: '501',
    read: true,
  },
  {
    id: '9d4c95ee-8e5a-40fc-93cb-0724b2977558',
    title: 'Percy Jackson',
    author: 'Rick Riordan',
    pages: '345',
    read: true,
    cover: 'https://m.media-amazon.com/images/I/91WN6a6F3RL.jpg',
  },
  {
    id: '037560a5-a984-4d48-b870-53948f844b48',
    title: 'Stillness is the Key',
    author: 'Ryan Holliday',
    pages: '405',
    read: false,
  },
  {
    id: '9b47c856-1dca-42db-bb77-4e13a8d1949d',
    title: 'Putting Out of Your Mind',
    author: 'Dr. Bob Rotella',
    pages: '275',
    read: true,
    cover:
      'https://m.media-amazon.com/images/I/71bzRWEmupL._AC_UF1000,1000_QL80_.jpg',
  },
];

displayBookList();

function Book(title, author, pages, read, cover) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.cover = cover;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages} pages, ${
      read ? 'read' : 'not read yet'
    }`;
  };
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
}

function displayBookList() {
  myLibrary.forEach((item) => {
    let bookCard = createBookCard(item);
    // let bookCard = document.createElement('div');
    // bookCard.textContent = `${item.title}, ${item.author}, ${item.pages}, ${item.read}`;
    document.getElementById('book-list').appendChild(bookCard);
  });
}

function createBookCard(obj) {
  const bookCard = document.createElement('div');
  bookCard.setAttribute('class', 'book-card');

  const innerCard = document.createElement('div');
  innerCard.setAttribute('class', 'book-card-inner');

  const front = document.createElement('div');
  front.setAttribute('class', 'book-card-front');

  if (obj.cover) {
    const coverImg = document.createElement('img');
    coverImg.setAttribute('class', 'cover-art');
    coverImg.src = obj.cover;
    front.appendChild(coverImg);
  } else {
    const bookCover = document.createElement('div');
    bookCover.setAttribute('class', 'cover-art');
    bookCover.setAttribute('class', 'no-image');
    const frontTitle = document.createElement('h3');
    frontTitle.textContent = obj.title;
    const frontAuthor = document.createElement('p');
    frontAuthor.textContent = obj.author;
    bookCover.appendChild(frontTitle);
    bookCover.appendChild(frontAuthor);
    front.appendChild(bookCover);
  }

  const back = document.createElement('div');
  back.setAttribute('class', 'book-card-back');
  const backTitle = document.createElement('h2');
  backTitle.textContent = obj.title;
  const backAuthor = document.createElement('h3');
  backAuthor.textContent = obj.author;
  const pages = document.createElement('p');
  pages.textContent = `${obj.pages} pages`;
  const read = document.createElement('p');
  if (obj.read) {
    read.setAttribute('class', 'read');
    read.textContent = 'Read';
  } else {
    read.setAttribute('class', 'not-read');
    read.textContent = 'Not Read';
  }

  back.appendChild(backTitle);
  back.appendChild(backAuthor);
  back.appendChild(pages);
  back.appendChild(read);
  innerCard.appendChild(front);
  innerCard.appendChild(back);
  bookCard.appendChild(innerCard);
  return bookCard;
}

document.getElementById('add-to-library').addEventListener('click', (e) => {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let cover = document.getElementById('cover-link').value;
  let newBook = new Book(title, author, pages, read, cover);
  addBookToLibrary(newBook);
  document.getElementById('book-list').innerHTML = '';
  displayBookList();
});
