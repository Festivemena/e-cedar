export const allProductsQuery = () => {
  const query = `*[_type == "product"] | order(_createdAt desc){
    _id,
      category,
   price,
   productName,
   productDetails,
        productImage{
         asset->{
           _id,
           url
         }
       },
 }`;

  return query;
};

export const productDetailQuery = (id: string | string[]) => {
  const query = `*[_type == "product" && _id == '${id}']{
    _id,
     productDetails,
     productName,
     productImage{
      asset->{
        _id,
        url
      }
    },
      category,
      price,
    }
  }`;
  return query;
};

export const searchPostsQuery = (searchTerm: string | string[]) => {
  const query = `*[_type == "product" && productName match '${searchTerm}*' || category match '${searchTerm}*'] {
    _id,
    productDetails,
    productName,
    productImage{
     asset->{
       _id,
       url
     }
   },
     category,
     price,
   }
  }`;
  return query;
};

export const singleUserQuery = (userId: string | string[]) => {
  const query = `*[_type == "user" && _id == '${userId}']`;

  return query;
};

export const allUsersQuery = () => {
  const query = `*[_type == "user"]`;

  return query;
};

// export const userCreatedPostsQuery = (userId: string | string[]) => {
//   const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
//     _id,
//      caption,
//        video{
//         asset->{
//           _id,
//           url
//         }
//       },
//       userId,
//     postedBy->{
//       _id,
//       userName,
//       image
//     },
//  likes,

//     comments[]{
//       comment,
//       _key,
//       postedBy->{
//       _id,
//       userName,
//       image
//     },
//     }
//   }`;

//   return query;
// };

// export const userLikedPostsQuery = (userId: string | string[]) => {
//   const query = `*[_type == 'product' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
//     _id,
//      caption,
//        video{
//         asset->{
//           _id,
//           url
//         }
//       },
//       userId,
//     postedBy->{
//       _id,
//       userName,
//       image
//     },
//  likes,

//     comments[]{
//       comment,
//       _key,
//       postedBy->{
//       _id,
//       userName,
//       image
//     },
//     }
//   }`;

//   return query;
// };

export const topicPostsQuery = (category: string | string[]) => {
  const query = `*[_type == "product" && category match '${category}*'] {
    _id,
    productDetails,
    productName,
    productImage{
     asset->{
       _id,
       url
     }
   },
     category,
     price,
   }
  }`;

  return query;
};
