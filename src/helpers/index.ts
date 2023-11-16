export const fetchFavoriteBooks = async () => {
  const response = await fetch('https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Request-Headers': 'Content-Type'},
    body: JSON.stringify({query: 'query myQuery { favoriteBooks { id name cover author { name } } }'})
    }
  );
  const data = await response.json();
  return data;
};

export const fetchAllBooks = async () => {
  const response = await fetch('https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Request-Headers': 'Content-Type'},
    body: JSON.stringify({query: 'query myQuery { allBooks { id name cover category author { name } } }'})
    }
  );
  const data = await response.json();
  console.log(data);
  return data.data.allBooks;
};

export const fetchDetailedBook = async (id: string|undefined) => {
  if (!id) {
    return;
  }
  const response = await fetch('https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Request-Headers': 'Content-Type'},
    body: JSON.stringify({query: `query myQuery { book(id: "${id}") { name cover description isFavorite category author { name description} } }`})
    }
  );
  const data = await response.json();
  return data.data.book;
}

export const fetchFavoriteAuthors = async () => {
  const response = await fetch('https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Request-Headers': 'Content-Type'},
    body: JSON.stringify({query: 'query myQuery { favoriteAuthors { id booksCount name picture} }'})
    }
  );
  const data = await response.json();
  return data.data.favoriteAuthors;
};