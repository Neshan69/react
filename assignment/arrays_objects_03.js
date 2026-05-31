const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  pages: 180,
  publishedYear: 1925,
};

const updatedBook = { ...book, isRead: true };

console.log(updatedBook);
